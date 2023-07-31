import {WorkOrdersContainer} from '@/core/work_orders/WorkOrdersContainer';
import {GetWorkOrderHistoryUseCase} from '@/core/work_orders/application/GetWorkOrderHistoryUseCase';
import {WorkOrderLocator} from '@/core/work_orders/domain/WorkOrderLocator';
import {
  CurrentBillingOverviewResponse,
  CurrentBillingResponse,
  WorkOrderHistoryRequest,
} from '@/core/work_orders/domain/WorkOrder';
import {useState, useEffect} from 'react';
import {RescueService} from '@/core/services/domain/RescueService';
import {handleWorkOrdersGroupingByDate} from '@/ui/utils/dateUtils';
import {GetTodayPoolWorkOrdersUseCase} from '@/core/work_orders/application/GetTodayPoolOrderUseCase';
import {GetTodayOngoingWorkOrdersUseCase} from '@/core/work_orders/application/GetTodayOngoingWorkOrdersUseCase';
import {GetTodayWorkOrdersUseCase} from '@/core/work_orders/application/GetTodayWorkOrdersUseCase';
import {GetCurrentBillingOverviewUseCase} from '@/core/work_orders/application/GetCurrentBillingOverviewUseCase';
import {GetCurrentBillingUseCase} from '@/core/work_orders/application/GetCurrentBillingUseCase';

export enum FilterTypes {
  NEW = 1,
  ONGOING = 2,
  FEE_SUBMIT = 3,
  PENDING = 4,
  PAID = 5,
  ALL = 0,
}

export const useWorkOrdersHistory = (
  selectedService: string,
  rescueServices: RescueService[],
  selectedDateType: string,
) => {
  const [formattedWorkOrders, setFormattedWorkOrders] = useState<any>([]);

  useEffect(() => {
    const fetchWorkOrders = async (request: WorkOrderHistoryRequest) => {
      const usecase = WorkOrdersContainer.get<GetWorkOrderHistoryUseCase>(
        WorkOrderLocator.GetWorkOrderHistoryUseCase,
      );
      return await usecase.GetWorkOrderHistory(request);
    };
    const formatRequest = (
      page = 1,
      pageSize = 10,
    ): WorkOrderHistoryRequest => {
      let data: WorkOrderHistoryRequest = {
        page,
        pageSize,
      };
      if (selectedService !== 'All Services') {
        const serviceId = rescueServices
          .filter(rs => rs.name === selectedService)
          .map(rs => rs.id)
          .reduce((acc, val) => val);
        if (serviceId) {
          data.serviceId = serviceId;
        }
      }
      if (selectedDateType !== 'All Time') {
        data.filterMonth = selectedDateType;
      }
      return data;
    };
    const getWorkOrdersHistory = async () => {
      let workOrders = [];
      let request = formatRequest();
      const data = await fetchWorkOrders(request);
      workOrders = data.data;
      while (request.page < data.page.totalPage) {
        request.page++;
        const newData = await fetchWorkOrders(request);
        workOrders = workOrders.concat(newData.data);
      }
      const wos = handleWorkOrdersGroupingByDate(workOrders, []);
      setFormattedWorkOrders(wos);
    };
    getWorkOrdersHistory();
  }, [rescueServices, selectedDateType, selectedService]);

  return {formattedWorkOrders};
};

export const useTabWorkOrders = () => {
  const [workOrders, setWorkOrders] = useState<any>([]);
  const [selectedFilterType, setSelectedFilterType] = useState<number>(
    FilterTypes.NEW,
  );
  const fetchPoolWorkOrders = async () => {
    const usecase = WorkOrdersContainer.get<GetTodayPoolWorkOrdersUseCase>(
      WorkOrderLocator.GetTodayPoolWorkOrdersUseCase,
    );
    return await usecase.GetTodayPoolWorkOrders();
  };
  const fetchOngoingWorkOrders = async () => {
    const usecase = WorkOrdersContainer.get<GetTodayOngoingWorkOrdersUseCase>(
      WorkOrderLocator.GetTodayOngoingWorkOrdersUseCase,
    );
    return await usecase.GetTodayOngoingWorkOrders();
  };
  const fetchFeeSubmitWorkOrders = async () => {
    const usecase = WorkOrdersContainer.get<GetTodayWorkOrdersUseCase>(
      WorkOrderLocator.GetTodayWorkOrdersUseCase,
    );
    return await usecase.GetTodayWorkOrders({queryType: 3});
  };
  const fetchPendingWorkOrders = async () => {
    const usecase = WorkOrdersContainer.get<GetTodayWorkOrdersUseCase>(
      WorkOrderLocator.GetTodayWorkOrdersUseCase,
    );
    return await usecase.GetTodayWorkOrders({queryType: 4});
  };
  const fetchPaidWorkOrders = async () => {
    const usecase = WorkOrdersContainer.get<GetTodayWorkOrdersUseCase>(
      WorkOrderLocator.GetTodayWorkOrdersUseCase,
    );
    return await usecase.GetTodayWorkOrders({queryType: 5});
  };
  const fetchAllWorkOrders = async () => {
    const usecase = WorkOrdersContainer.get<GetTodayWorkOrdersUseCase>(
      WorkOrderLocator.GetTodayWorkOrdersUseCase,
    );
    return await usecase.GetTodayWorkOrders({queryType: 0});
  };
  useEffect(() => {
    const getWorkOrders = async () => {
      let data: any[] = [];
      switch (selectedFilterType) {
        case FilterTypes.NEW:
          data = await fetchPoolWorkOrders();
          setWorkOrders(data);
          break;
        case FilterTypes.ONGOING:
          data = await fetchOngoingWorkOrders();
          setWorkOrders(data);
          break;
        case FilterTypes.FEE_SUBMIT:
          data = await fetchFeeSubmitWorkOrders();
          setWorkOrders(data);
          break;
        case FilterTypes.PENDING:
          data = await fetchPendingWorkOrders();
          setWorkOrders(data);
          break;
        case FilterTypes.PAID:
          data = await fetchPaidWorkOrders();
          setWorkOrders(data);
          break;
        case FilterTypes.ALL:
          data = await fetchAllWorkOrders();
          setWorkOrders(data);
          break;
        default:
          setWorkOrders([]);
          break;
      }
    };
    getWorkOrders();
  }, [selectedFilterType]);
  return {workOrders, selectedFilterType, setSelectedFilterType};
};

export const useTabBilling = () => {
  const [billingOverview, setBillingOverview] =
    useState<CurrentBillingOverviewResponse>({totalEarned: 0, completedWO: 0});
  const [billings, setBillings] = useState<CurrentBillingResponse[]>([]);

  const fetchBillingOvervew = async () => {
    const usecase = WorkOrdersContainer.get<GetCurrentBillingOverviewUseCase>(
      WorkOrderLocator.GetCurrentBillingOverviewUseCase,
    );
    return await usecase.GetCurrentBillingOverview();
  };
  const fetchBillings = async () => {
    const usecase = WorkOrdersContainer.get<GetCurrentBillingUseCase>(
      WorkOrderLocator.GetCurrentBillingUseCase,
    );
    return await usecase.GetCurrentBilling();
  };
  useEffect(() => {
    const getWorkOrderOverview = async () => {
      const billingOverviewData = await fetchBillingOvervew();
      const billingsData = await fetchBillings();
      setBillingOverview(billingOverviewData);
      setBillings(billingsData);
    };
    getWorkOrderOverview();
  }, []);
  return {billings, billingOverview};
};
