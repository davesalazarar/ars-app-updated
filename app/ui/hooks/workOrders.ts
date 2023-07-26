import {WorkOrdersContainer} from '@/core/work_orders/WorkOrdersContainer';
import {GetWorkOrderHistoryUseCase} from '@/core/work_orders/application/GetWorkOrderHistoryUseCase';
import {WorkOrderLocator} from '@/core/work_orders/domain/WorkOrderLocator';
import {WorkOrderHistoryRequest} from '@/core/work_orders/domain/WorkOrder';
import {useState, useEffect} from 'react';
import {RescueService} from 'core/services/domain/RescueService';
import {handleWorkOrdersGroupingByDate} from '@/ui/utils/dateUtils';

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
