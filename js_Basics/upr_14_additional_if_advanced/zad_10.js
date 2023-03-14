// Zadacha 10 - Multiply by 2

function Demo(input) {
  let index = 0;
  let n = Number(input[index]);
  index++;

  while (n >= 0) {
    let result = n * 2;
    console.log(`Result: ${result.toFixed(2)}`);

    n = Number(input[index]);
    index++;
  }

  if (n < 0) {
    console.log('Negative number!');
  }
}

Demo(['12', '43.2144', '12.3', '543.23', '-20']);
console.log('------------');
Demo(['23.43', '12.3245', '0', '65.23432', '23', '65', '-12']);
console.log('------------');
Demo(['-123']);
