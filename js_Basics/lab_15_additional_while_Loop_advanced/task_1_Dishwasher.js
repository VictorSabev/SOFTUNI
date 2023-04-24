// Task 1 - Dishwasher

function Demo(input) {
  let index = 0;
  let initialDetergent = Number(input[index]);
  index++;
  let command = input[index];
  index++;
  let platesNumber = 0;
  let detergentCount = 0;
  let botelsProvided = initialDetergent * 750;

  let dishesCount = 0;
  let potsCount = 0;

  while (command !== 'End') {
    platesNumber = Number(command);
    if ((index - 1) % 3 === 0) {
      detergentCount += 15 * platesNumber;
      potsCount += platesNumber;
    } else {
      detergentCount += 5 * platesNumber;
      dishesCount += platesNumber;
    }
    if (detergentCount > botelsProvided) {
      console.log(`Not enough detergent, ${Math.abs(botelsProvided - detergentCount)} ml. more necessary!`);
      break;
    }

    command = input[index];
    index++;
  }

  let diference = Math.abs(botelsProvided - detergentCount);

  if (detergentCount <= botelsProvided) {
    console.log('Detergent was enough!');
    console.log(`${dishesCount} dishes and ${potsCount} pots were washed.`);
    console.log(`Leftover detergent ${diference} ml.`);
  }
}

Demo(['2', '53', '65', '55', 'End']);
console.log('--------------------------');
Demo(['1', '10', '15', '10', '12', '13', '30']);
