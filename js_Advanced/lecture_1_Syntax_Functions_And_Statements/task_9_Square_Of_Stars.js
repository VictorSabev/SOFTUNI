// Task 9 - Square of Stars

function starPrinter(numberOfStars) {
  let x = '';

  if (numberOfStars == undefined) {
    for (let i = 0; i < 5; i++) {
      x += ' *';
    }

    for (let i = 0; i < 5; i++) {
      console.log(x);
    }

    return;
  }

  for (let i = 0; i < numberOfStars; i++) {
    x += ' *';
  }

  for (let i = 0; i < numberOfStars; i++) {
    console.log(x);
  }
}

starPrinter(1);
starPrinter(2);
starPrinter(5);
starPrinter(7);
