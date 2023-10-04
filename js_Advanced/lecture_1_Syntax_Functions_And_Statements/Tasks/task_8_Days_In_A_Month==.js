// Task 8 - Days in a month

function daysInMonth(month, year) {
  let result;

  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      result = 31;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      result = 30;
      break;
    case 2:
      if (
        (year % 4 === 0 && year % 100 !== 0) ||
        (year % 100 === 0 && year % 400 === 0)
      ) {
        result = 29;
      } else {
        result = 28;
      }
  }
  console.log(result);
}

daysInMonth(1, 2012);
daysInMonth(2, 2021);
