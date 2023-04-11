// Zadacha 4 - Balls

function Demo(input) {
  let ballsNumber = Number(input[0]);
  let color = input[1];

  let ballsCOunter = 0;
  let redCounter = 0;
  let orangeCounter = 0;
  let yellowCounter = 0;
  let whiteCounter = 0;
  let blackCounter = 0;
  let othersCounter = 0;

  for (let i = 1; i <= ballsNumber; i++) {
    color = input[i];

    if (color === 'red') {
      ballsCOunter += 5;
      redCounter++;
    } else if (color === 'orange') {
      ballsCOunter += 10;
      orangeCounter++;
    } else if (color === 'yellow') {
      ballsCOunter += 15;
      yellowCounter++;
    } else if (color === 'white') {
      ballsCOunter += 20;
      whiteCounter++;
    } else if (color === 'black') {
      ballsCOunter /= 2;
      blackCounter++;
    } else {
      othersCounter++;
    }
  }
  console.log(`Total points: ${Math.floor(ballsCOunter)}`);
  console.log(`Red balls: ${Math.floor(redCounter)}`);
  console.log(`Orange balls: ${Math.floor(orangeCounter)}`);
  console.log(`Yellow balls: ${Math.floor(yellowCounter)}`);
  console.log(`White balls: ${Math.floor(whiteCounter)}`);
  console.log(`Other colors picked: ${Math.floor(othersCounter)}`);
  console.log(`Divides from black balls: ${Math.floor(blackCounter)}`);
}
Demo(['3', 'white', 'black', 'pink']);
console.log('-----------------------------');
Demo(['5', 'red', 'red', 'ddd', 'ddd', 'ddd']);
