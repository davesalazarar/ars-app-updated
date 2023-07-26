import * as React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './Styles';
import Picker from 'react-native-picker';
import {useState} from 'react';
import {Icon} from '@rneui/themed';
import {useRescueServices} from '@/ui/hooks/service';
import {createDateData} from '@/ui/utils/dateUtils';
import moment from 'moment';
import {WorkOrdersHistoryList} from './Components/WorkOrdersHistoryList';
import {useWorkOrdersHistory} from '@/ui/hooks/workOrders';

export default function WOHistoryScreen({navigation}: any) {
  const {rescueServices} = useRescueServices();
  const [selectedService, setSelectedService] = useState('All Services');
  const [selectedDateType, setSelectedDateType] = useState('All Time');
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState('');
  const {formattedWorkOrders} = useWorkOrdersHistory(
    selectedService,
    rescueServices,
    selectedDateType,
  );
  const showDatePicker = () => {
    Picker.init({
      pickerTitleText: 'Time Select',
      pickerCancelBtnText: 'Cancel',
      pickerConfirmBtnText: 'OK',
      selectedValue: [selectedYear, selectedMonth],
      pickerBg: [255, 255, 255, 1],
      pickerData: createDateData(selectedYear),
      pickerFontColor: [33, 33, 33, 1],
      onPickerConfirm: async pickedValue => {
        const newDate = moment([pickedValue[0]])
          .month(pickedValue[1])
          .format('YYYY-MM-DD');
        setSelectedYear(pickedValue[0]);
        setSelectedMonth(pickedValue[1]);
        setSelectedDateType(newDate);
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
        setSelectedService(pickedValue[0]);
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
      onPickerConfirm: async (pickedValue: any) => {
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
      <WorkOrdersHistoryList
        navigation={navigation}
        workOrders={formattedWorkOrders}
      />
    </SafeAreaView>
  );
}
