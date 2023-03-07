// Zad 2 - Multiplication Table

function Demo() {
  let result = 0;
  for (let multiplyerOne = 1; multiplyerOne <= 10; multiplyerOne++) {
    for (let multiplyerTwo = 1; multiplyerTwo <= 10; multiplyerTwo++) {
      result = multiplyerOne * multiplyerTwo;
      console.log(`${multiplyerOne} * ${multiplyerTwo} = ${result}`);
    }
  }
}

Demo();
