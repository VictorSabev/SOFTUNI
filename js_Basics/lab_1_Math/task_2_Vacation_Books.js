// Task 2 - Vacation books

function demo(input) {

  let pages = Number(input[0]); 
  let pagesPerHour = Number(input[1]);  
  let days = Number(input[2]);

  let hours = pages / pagesPerHour;
  let hoursPerDay = hours / days;
  console.log(hours);
  console.log(hoursPerDay);
}

demo(['212', '20', '2']);