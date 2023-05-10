// Task 7 - Required reading

function timeRedaing(pages, pagesPerHour, daysReading) {
  const totalHours = pages / pagesPerHour;
  const hoursPerDay = totalHours / daysReading;

  console.log(hoursPerDay);
}

timeRedaing(212, 20, 2);
timeRedaing(432, 15, 4);
