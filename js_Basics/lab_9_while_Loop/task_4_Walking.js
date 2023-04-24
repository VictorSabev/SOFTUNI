// Task 4 - Walking

function Demo(input) {
  let index = 0;
  let data = input[index];
  index++;
  let goal = 10000;
  let steps = data;
  let progress = 0;
  let counter = 0;

  while (data !== 'Going home') {
    if (counter >= input.length) {
      break;
    }
    steps = Number(data);
    progress += steps;
    counter++;
    data = input[index];
    index++;
  }

  if (data === 'Going home') {
    data = Number(input[index]);
    progress += data;
  }

  let difference = Math.abs(progress - goal);

  if (progress >= goal) {
    console.log('Goal reached! Good job!');
    console.log(`${difference} steps over the goal!`);
  } else {
    console.log(`${difference} more steps to reach goal.`);
  }
}

Demo(['1000', '1500', '2000', '6500']);
console.log('------------------------');
Demo(['1500', '300', '2500', '3000', 'Going home', '200']);
console.log('------------------------');
Demo(['1500', '3000', '250', '1548', '2000', 'Going home', '2000']);
console.log('------------------------');
Demo(['125', '250', '4000', '30', '2678', '4682']);
