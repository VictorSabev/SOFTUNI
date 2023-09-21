// Task 4 - Previous Day

function previousDay(year, month, day) {
  let dateInput = `${year}-${month}-${day}`;
  let date = new Date(dateInput);
  date.setDate();
  console.log(date);
}

previousDay(2016, 9, 30);
previousDay(2016, 10, 1);
