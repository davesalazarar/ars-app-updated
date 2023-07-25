import * as React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './Styles';
import Picker from 'react-native-picker';
import {useState} from 'react';
import {Icon} from '@rneui/themed';
import {useRescueServices} from '@/ui/hooks/service';
import {
  createDateData,
  handleWorkOrdersGroupingByDate,
} from '@/ui/utils/dateUtils';
import moment from 'moment';
import {WorkOrdersHistoryList} from './Components/WorkOrdersHistoryList';
import {WorkOrdersContainer} from '@/core/work_orders/WorkOrdersContainer';
import {GetWorkOrderHistoryUseCase} from '@/core/work_orders/application/GetWorkOrderHistoryUseCase';
import {WorkOrderHistoryRequest} from '@/core/work_orders/domain/WorkOrder';
import {WorkOrderLocator} from '@/core/work_orders/domain/WorkOrderLocator';

export default function WOHistoryScreen() {
  const {rescueServices} = useRescueServices();
  const [workOrders, setWorkOrders] = useState<any[]>([]);
  const [selectedService, setSelectedService] = useState('All Services');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [selectedDateType, setSelectedDateType] = useState('All Time');
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState('');

  const fetchWorkOrders = async (request: WorkOrderHistoryRequest) => {
    const usecase = WorkOrdersContainer.get<GetWorkOrderHistoryUseCase>(
      WorkOrderLocator.GetWorkOrderHistoryUseCase,
    );
    return await usecase.GetWorkOrderHistory(request);
  };

  const showDatePicker = () => {
    Picker.init({
      pickerTitleText: 'Time Select',
      pickerCancelBtnText: 'Cancel',
      pickerConfirmBtnText: 'OK',
      selectedValue: [selectedYear, selectedMonth],
      pickerBg: [255, 255, 255, 1],
      pickerData: createDateData(selectedYear),
      pickerFontColor: [33, 33, 33, 1],
      onPickerConfirm: pickedValue => {
        const newDate = moment([pickedValue[0]])
          .month(pickedValue[1])
          .format('YYYY-MM-DD');
        setSelectedDateType(newDate);
        setSelectedYear(pickedValue[0]);
        setSelectedMonth(pickedValue[1]);
      },
      onPickerCancel: () => setSelectedDateType('All Time'),
    });
    Picker.show();
  };

  const showServicesPicker = () => {
    Picker.init({
      pickerTitleText: 'Services Select',
      pickerCancelBtnText: 'Cancel',
      pickerConfirmBtnText: 'OK',
      selectedValue: [selectedService],
      pickerBg: [255, 255, 255, 1],
      pickerData: rescueServices.map(el => el.name),
      pickerFontColor: [33, 33, 33, 1],
      pickerFontSize: 12,
      onPickerConfirm: async (pickedValue: any) => {
        setIsRefreshing(true);
        setSelectedService(pickedValue[0]);
        const request = {
          page: 1,
          pageSize: 10,
          selectedService,
        };
        const data = await fetchWorkOrders(request);
        setWorkOrders(
          handleWorkOrdersGroupingByDate(data, workOrders, isRefreshing),
        );
        setIsRefreshing(false);
      },
    });
    Picker.show();
  };

  const showTimeTypePicker = () => {
    Picker.init({
      pickerTitleText: 'Time Select',
      pickerCancelBtnText: 'Cancel',
      pickerConfirmBtnText: 'OK',
      selectedValue: [selectedDateType],
      pickerBg: [255, 255, 255, 1],
      pickerData: ['All Time', 'Custom Time'],
      pickerFontColor: [33, 33, 33, 1],
      onPickerConfirm: (pickedValue: any) => {
        setSelectedDateType(pickedValue[0]);
        if (pickedValue[0] === 'Custom Time') {
          showDatePicker();
        }
      },
    });
    Picker.show();
  };
  return (
    <SafeAreaView style={styles.order_content}>
      <View style={styles.filtercontainer}>
        <TouchableOpacity onPress={() => showServicesPicker()}>
          <View style={styles.filter_item}>
            <Text>{selectedService}</Text>
            <Icon
              name="down"
              type="antdesign"
              color="rgba(45, 141, 188, 1)"
              iconStyle={styles.icon}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => showTimeTypePicker()}>
          <View style={styles.filter_item}>
            <Text>{selectedDateType}</Text>
            <Icon
              name="down"
              type="antdesign"
              color="rgba(45, 141, 188, 1)"
              iconStyle={styles.icon}
            />
          </View>
        </TouchableOpacity>
      </View>
      <WorkOrdersHistoryList workOrders={workOrders} />
    </SafeAreaView>
  );
}
