export function monthSwitch(currentMonth){
  let currentMonthNumber;
  switch (currentMonth) {
    case 'Jan':
      currentMonthNumber = 1;
      break;
      case 'Feb':
      currentMonthNumber = 2;
      break;
      case 'Mar':
      currentMonthNumber = 3;
      break;
      case 'Apr':
      currentMonthNumber = 4;
      break;
      case 'May':
      currentMonthNumber = 5;
      break;
      case 'Jun':
      currentMonthNumber = 6;
      break;
      case 'Jul':
      currentMonthNumber = 7;
      break;
      case 'Agu':
      currentMonthNumber = 8;
      break;
      case 'Sep':
      currentMonthNumber = 9;
      break;
      case 'Oct':
      currentMonthNumber = 10;
      break;
      case 'Nov':
      currentMonthNumber = 11;
      break;
      case 'Dec':
      currentMonthNumber = 12;
      break;
  }
  return currentMonthNumber;
}