// Zadacha 10 - Weather Forecast - Part 2

function Demo(input) {
  let entry = Number(input[0]);

  if (entry <= 35 && entry >= 26) {
    console.log('Hot');
  } else if (entry <= 25.9 && entry >= 20.1) {
    console.log('Warm');
  } else if (entry <= 20 && entry >= 15) {
    console.log('Mild');
  } else if (entry <= 14.9 && entry >= 5) {
    console.log('Cold');
  } else {
    console.log('unknown');
  }
}

Demo(['16.5']);
Demo(['8']);
Demo(['22.4']);
