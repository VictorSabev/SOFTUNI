// Task 5 - 

function Demo(input) {
  let index = 0;
  let h = Number(input[index]);
  index++;
  let a = Number(input[index]);
  index++;
  let unpaintedAreaPercent = Number(input[index]);
  index++;
  let command = input[index];
  index++;
  let litersPaint = 0;
  let painCount = 0;

  let totalArea = h * a * 4;
  let paintedArea = totalArea - (totalArea * unpaintedAreaPercent) / 100;

  while (command !== 'Tired!') {
    litersPaint = Number(command);
    painCount += litersPaint;

    if (painCount >= paintedArea) {
      break;
    }

    command = input[index];
    index++;
  }

  let diference = Math.abs(painCount - paintedArea);

  if (command === 'Tired!') {
    console.log(`${diference} quadratic m left.`);
  }
  if (painCount > paintedArea) {
    console.log(`All walls are painted and you have ${diference} l paint left!`);
  } else if (painCount === paintedArea) {
    console.log(`All walls are painted! Great job, Pesho!`);
  }
}

Demo(['3', '5', '10', '2', '3', '4', 'Tired!']);
Demo(['2', '3', '25', '6', '7', '8']);
