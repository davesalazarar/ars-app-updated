import {WorkOrdersContainer} from '@/core/work_orders/WorkOrdersContainer';
import {GetWorkOrderHistoryUseCase} from '@/core/work_orders/application/GetWorkOrderHistoryUseCase';
import {WorkOrderLocator} from '@/core/work_orders/domain/WorkOrderLocator';
import {WorkOrderHistoryRequest} from '@/core/work_orders/domain/WorkOrder';
import {useState, useEffect} from 'react';

export const useWorkOrdersHistory = (request: WorkOrderHistoryRequest) => {
  const [workOrders, setWorkOrders] = useState<any[]>();
  useEffect(() => {
    const getWorkOrders = async () => {
      try {
        const usecase = WorkOrdersContainer.get<GetWorkOrderHistoryUseCase>(
          WorkOrderLocator.GetWorkOrderHistoryUseCase,
        );
        const data = await usecase.GetWorkOrderHistory(request);
        setWorkOrders(data);
      } catch (error) {
        console.log(error);
      }
    };
    getWorkOrders();
  }, [request]);
  return {workOrders};
};
