import {WorkOrdersContainer} from '@/core/work_orders/WorkOrdersContainer';
import {GetWorkOrderHistoryUseCase} from '@/core/work_orders/application/GetWorkOrderHistoryUseCase';
import {WorkOrderLocator} from '@/core/work_orders/domain/WorkOrderLocator';
import {
  CurrentBillingOverviewResponse,
  WorkOrderHistoryRequest,
} from '@/core/work_orders/domain/WorkOrder';
import {useState, useEffect} from 'react';
import {RescueService} from '@/core/services/domain/RescueService';
import {handleWorkOrdersGroupingByDate} from '@/ui/utils/dateUtils';
import {GetTodayPoolWorkOrdersUseCase} from '@/core/work_orders/application/GetTodayPoolOrderUseCase';
import {GetTodayOngoingWorkOrdersUseCase} from '@/core/work_orders/application/GetTodayOngoingWorkOrdersUseCase';
import {GetTodayWorkOrdersUseCase} from '@/core/work_orders/application/GetTodayWorkOrdersUseCase';
import {GetCurrentBillingOverviewUseCase} from '@/core/work_orders/application/GetCurrentBillingOverviewUseCase';
import {GetCurrentBillingUseCase} from 'core/work_orders/application/GetCurrentBillingUseCase';

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
  const fetchTodayWorkOrders = async () => {
    const usecase = WorkOrdersContainer.get<GetTodayWorkOrdersUseCase>(
      WorkOrderLocator.GetTodayWorkOrdersUseCase,
    );
    return await usecase.GetTodayWorkOrders({queryType: 3});
  };
  useEffect(() => {
    const getWorkOrders = async () => {
      console.log('selected filter', selectedFilterType);
      if (selectedFilterType === FilterTypes.NEW) {
        const data = await fetchPoolWorkOrders();
        setWorkOrders(data);
      }
      if (selectedFilterType === FilterTypes.ONGOING) {
        const data = await fetchOngoingWorkOrders();
        setWorkOrders(data);
      }
      if (selectedFilterType === FilterTypes.FEE_SUBMIT) {
        const data = await fetchTodayWorkOrders();
        setWorkOrders(data);
      }
    };
    getWorkOrders();
  }, [selectedFilterType]);
  return {workOrders, selectedFilterType, setSelectedFilterType};
};

export const useTabBilling = () => {
  const [billingOverview, setBillingOverview] =
    useState<CurrentBillingOverviewResponse>({totalEarned: 0, completedWO: 0});
  const [billings, setBillings] = useState<any>([]);
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
      const billingOverview = await fetchBillingOvervew();
      const billings = await fetchBillings();
      console.log(billingOverview, billings);
      setBillingOverview(billingOverview);
      setBillings(billings);
    };
    getWorkOrderOverview();
  }, []);
  return {billings, billingOverview};
};
