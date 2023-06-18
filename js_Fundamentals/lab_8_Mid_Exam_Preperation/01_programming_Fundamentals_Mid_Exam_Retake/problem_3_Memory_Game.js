// Problem 3 - Memory Game

function memoryGame(input) {
  let sequenceOfElements = input.shift().split(' ');
  let command = input.shift();

  let movesCounter = 0;

  while (command !== 'end') {
    movesCounter++;
    let playerChoice = command.split(' ');
    let firstIndex = Number(playerChoice.shift());
    let secondIndex = Number(playerChoice.shift());

    let firstGuess = sequenceOfElements[firstIndex];
    let secondGuess = sequenceOfElements[secondIndex];
    let middleOfArray = sequenceOfElements.length / 2;

    if (firstIndex === secondIndex || (firstIndex < 0 || firstIndex >= sequenceOfElements.length) || (secondIndex < 0 || secondIndex >= sequenceOfElements.length)) {
      sequenceOfElements.splice(middleOfArray, 0, `-${movesCounter}a`, `-${movesCounter}a`);
      console.log(`Invalid input! Adding additional elements to the board`);
    } else if (firstGuess === secondGuess) {
      sequenceOfElements = sequenceOfElements.filter((a) => a !== firstGuess);
      console.log(`Congrats! You have found matching elements - ${firstGuess}!`);
    } else if (firstGuess !== secondGuess) {
      console.log('Try again!');
    }

    if (sequenceOfElements.length === 0) {
      console.log(`You have won in ${movesCounter} turns!`);
      break;
    }

    command = input.shift();
  }

  if (sequenceOfElements.length !== 0) {
    console.log('Sorry you lose :(');
    console.log(sequenceOfElements.join(' '));
    return;
  }
}

memoryGame(['1 1 2 2 3 3 4 4 5 5', '1 0', '-1 0', '1 0', '1 0', '1 0', 'end']);
memoryGame(['a 2 4 a 2 4', '0 3', '0 2', '0 1', '0 1', 'end']);
memoryGame(['a 2 4 a 2 4', '4 0', '0 2', '0 1', '0 1', 'end']);
