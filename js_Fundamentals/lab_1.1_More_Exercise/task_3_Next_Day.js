// Task 3 - Next Day

function inputDate(year, month, date) {
  if (month === 12 && date === 31) {
    year += 1;
    month = 1;
    date = 1;
  } else if (((month === 2 && year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) && date === 29) {
    month += 1;
    date = 1;
  } else if (month === 2 && year % 4 !== 0 && date === 28) {
    month += 1;
    date = 1;
  } else if ((month === 4 || month === 6 || month === 9 || month === 11) && date === 30) {
    month += 1;
    date = 1;
  } else if ((month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10) && date === 31) {
    month += 1;
    date = 1;
  } else {
    date += 1;
  }
  console.log(`${year}-${month}-${date}`);
}

inputDate(2016, 9, 30);
inputDate(2020, 3, 24);
