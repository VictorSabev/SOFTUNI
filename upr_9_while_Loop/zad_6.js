// Zadacha 6 - Cake

function Demo(input) {
  let index = 0;
  let x = input[index];
  index++;
  let y = input[index];
  index++;
  let command = input[index];
  index++;
  let holeCake = x * y;
  let currentNumberOfPieces = 0;
  let totalNumberOfPieces = 0;

  while (command !== 'STOP') {
    currentNumberOfPieces = Number(command);
    totalNumberOfPieces += currentNumberOfPieces;

    if (totalNumberOfPieces >= holeCake) {
      break;
    }

    command = input[index];
    index++;
  }
  let difference = Math.abs(holeCake - totalNumberOfPieces);

  if (totalNumberOfPieces > holeCake) {
    console.log(`No more cake left! You need ${difference} pieces more.`);
  } else {
    console.log(`${difference} pieces are left.`);
  }
}

Demo(['10', '10', '20', '20', '20', '20', '21']);
Demo(['10', '2', '2', '4', '6', 'STOP']);
