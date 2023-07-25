export const BubbleSort = (arr: any[], key: string, order: any) => {
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (order === 'reverse') {
        if (arr[j][key] > arr[j + 1][key]) {
          var item = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = item;
        }
      } else if (order === 'noReverse') {
        if (arr[j][key] < arr[j + 1][key]) {
          var item = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = item;
        }
      }
    }
  }
  return arr;
};

export const transformIncident = (status: string) => {
  let res = '';
  switch (status) {
    case '1':
      res = 'Highway';
      break;
    case '2':
      res = 'Non-Residential';
      break;
    case '3':
      res = 'Residential';
      break;
    default:
      break;
  }
  return res;
};
