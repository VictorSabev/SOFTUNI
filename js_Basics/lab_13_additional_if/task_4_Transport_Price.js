// Task 4 - Transport Price

function Demo(input) {
  let index = 0;
  let n = Number(input[index]);
  index++;
  let timeOfDay = input[index];
  index++;
  let price = 0;
  let initiationFee = 0;

  if (n >= 100) {
    price = 0.06;
  } else if (n < 100 && n >= 20) {
    price = 0.09;
  } else if (n < 20 && timeOfDay === 'day') {
    price = 0.79;
    initiationFee = 0.7;
  } else if (n < 20 && timeOfDay === 'night') {
    price = 0.9;
    initiationFee = 0.7;
  }

  let cheapestOption = n * price + initiationFee;
  console.log(cheapestOption.toFixed(2));
}

Demo(['5', 'day']);
Demo(['7', 'night']);
Demo(['25', 'day']);
Demo(['180', 'night']);
