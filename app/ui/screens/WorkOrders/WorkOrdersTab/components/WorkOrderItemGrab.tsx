import {Text} from '@rneui/base';
import React from 'react';

export const WorkOrderItemGrab = (workOrder: any) => {
  return <Text>{JSON.stringify(workOrder)}</Text>;
};
