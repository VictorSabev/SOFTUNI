// Task 2 - Day of Week

function dayOfWeek(day) {
  let weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  // Inital way too long method

  /* let arrayLenght = weekDays.length;
  for (let i = 0; i < arrayLenght; i++) {
    if (i === day - 1) {
      console.log(weekDays[i]);
    }
  } 
*/
  if (day < 1 || day > 7) {
    console.log('Invalid day!');
  } else {
    console.log(weekDays[day - 1]);
  }
}

dayOfWeek(3);
dayOfWeek(6);
dayOfWeek(11);
