// Zadacha 9 - Weather Forecast

function Demo(input) {
  let entry = input[0];

  if (entry === 'sunny') {
    console.log("It's warm outside!");
  } else {
    console.log("It's cold outside!");
  }
}

Demo(['sunny']);
Demo(['cloudy']);
Demo(['snowy']);
