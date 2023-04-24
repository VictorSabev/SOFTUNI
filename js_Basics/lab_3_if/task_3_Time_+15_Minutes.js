// Task 3 - Time + 15 Minutes

function Demo(input) {
  let hours = Number(input[0]);
  let minutes = Number(input[1]);
  let newHours;
  let newMinutes;

  if (minutes + 15 >= 60 && hours == 23) {
    newHours = 0;
    newMinutes = minutes + 15 - 60;
  } else if (minutes + 15 >= 60) {
    newHours = hours + 1;
    newMinutes = minutes + 15 - 60;
  } else if (minutes + 15 < 60) {
    newHours = hours;
    newMinutes = minutes + 15;
  }

  if (newMinutes >= 0 && newMinutes < 10) {
    console.log(`${newHours}:0${newMinutes}`);
  } else if (newMinutes >= 10) {
    console.log(`${newHours}:${newMinutes}`);
  }
}

Demo(['1', '46']);
Demo(['0', '01']);
Demo(['23', '59']);
Demo(['11', '08']);
Demo(['12', '49']);
