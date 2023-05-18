// Task 5 - Binary to Decimal

function binaryConverter(num) {
  const binary = num.toString();
  let decimal = parseInt(binary, 2);

  console.log(decimal);
}

binaryConverter(00001001);
binaryConverter(11110000);
