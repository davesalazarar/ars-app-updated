import moment from 'moment';
import {BubbleSort} from './sort';

export const createDateData = (selectedYear: number): any[] => {
  let date = [];
  let _year = [];
  for (let i = 1970; i <= selectedYear; i++) {
    _year.push(i);
  }

  let _month = [];
  for (let i = 0; i < 12; i++) {
    _month.push(moment().month(i).format('MMM'));
  }

  date.push(_year);
  date.push(_month);
  return date;
};

export const handleWorkOrdersGroupingByDate = (
  data: any[],
  historyOrder: any[],
  isRefresh: boolean,
) => {
  let res = isRefresh ? [] : historyOrder.concat();
  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    // const time = element.acceptTime;
    const time = element.dispatchTime;
    element.key = element.orderId;
    // const eleMonth=moment(time).month();
    const eleDay = moment(time).dayOfYear();
    let flag = true;
    for (let i = 0; i < res.length; i++) {
      const resele = res[i];
      if (resele.key === eleDay) {
        let haveOrder = false;
        for (let j = 0; j < resele.data.length; j++) {
          const ele = resele.data[j];
          if (ele.key === element.orderId) {
            haveOrder = true;
            break;
          }
        }
        if (!haveOrder) {
          resele.data.push(element);
        }
        flag = false;
        break;
      }
    }
    if (flag) {
      let obj = {
        title: moment(time).format('MM/DD/YYYY'),
        // month:eleMonth,
        key: eleDay,
        data: [element],
      };
      res.push(obj);
    }
  }
  // Sort by time
  return sortByTime(res);
};

const sortByTime = (res: any[]) => {
  return BubbleSort(res, 'key', 'noReverse');
};
