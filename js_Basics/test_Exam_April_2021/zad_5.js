// Zadacha 5 - Care of Puppy

function Demo(input) {
  let index = 0;
  let startingFood = Number(input[index]) * 1000;
  index++;
  let command = input[index];
  index++;
  let ration = 0;
  let rationCounter = 0;

  while (command !== 'Adopted') {
    ration = Number(command);
    rationCounter += ration;

    command = input[index];
    index++;
  }

  let diference = Math.abs(rationCounter - startingFood);

  if (rationCounter <= startingFood) {
    console.log(`Food is enough! Leftovers: ${diference} grams.`);
  } else {
    console.log(`Food is not enough. You need ${diference} grams more.`);
  }
}

Demo(['4', '130', '345', '400', '180', '230', '120', 'Adopted']);
Demo(['3', '1000', '1000', '1000', 'Adopted']);
Demo(['2', '999', '456', '999', '999', '123', '456', 'Adopted']);
