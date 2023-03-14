// Zadacha 4 - Vacation Books List

function Demo(input) {
  let numberOfPages = Number(input[0]);
  let pagesPerHour = Number(input[1]);
  let days = Number(input[2]);

  let totalHours = numberOfPages / pagesPerHour;
  let hoursPerDay = totalHours / days; 

  console.log(hoursPerDay);
}

Demo(['212', '20', '2']);
Demo(['432', '15', '4']);