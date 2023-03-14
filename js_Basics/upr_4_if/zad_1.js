// Zadacha 1 - Day of Week

function Demo(input) {
  let dayOfWeek = Number(input[0]);

  switch (dayOfWeek) {
    case 1:
      console.log('Monday');
      break;
    case 2:
      console.log('Tuesday');
      break;
    case 3:
      console.log('Wednesday');
      break;
    case 4:
      console.log('Thursday');
      break;
    case 5:
      console.log('Friday');
      break;
    case 6:
      console.log('Saturday');
      break;
    case 7:
      console.log('Sunday');
      break;
    default:
      console.log("Error");
      break;
  }
}

Demo(["1"]);
Demo(["2"]);
Demo(["3"]);
Demo(["4"]);
Demo(["5"]);
Demo(["6"]);
Demo(["7"]);
Demo(["-1"]);
