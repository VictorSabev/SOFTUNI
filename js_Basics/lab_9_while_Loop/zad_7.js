// Zadacha 7 - Moving

function Demo(input) {
  let index = 0;
  let x = input[index];
  index++;
  let y = input[index];
  index++;
  let z = input[index];
  index++;
  let command = input[index];
  index++;

  let roomDimensions = x * y * z;
  let boxesDelivery = 0;
  let totalBoxesNumber = 0;

  while (command !== 'Done') {
    boxesDelivery = Number(command);
    totalBoxesNumber += boxesDelivery;

    if (totalBoxesNumber >= roomDimensions) {
      break;
    }

    command = input[index];
    index++;
  }

  let difference = Math.abs(totalBoxesNumber - roomDimensions);

  if (totalBoxesNumber <= roomDimensions) {
    console.log(`${difference} Cubic meters left.`);
  } else {
    console.log(
      `No more free space! You need ${difference} Cubic meters more.`
    );
  }
}

Demo(['10', '10', '2', '20', '20', '20', '20', '122']);
Demo(['10', '1', '2', '4', '6', 'Done']);
