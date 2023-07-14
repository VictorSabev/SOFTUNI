// Task 4 - Ascii Sumator

function sumator(input) {
  const string = input.pop();

  input[0] = input[0].charCodeAt();
  input[1] = input[1].charCodeAt();
  input = input.sort((a, b) => a - b);

  let startChar = input[0];
  let endChar = input[1];

  let sum = 0;

  for (const char of string) {
    let currentcharValue = char.charCodeAt();
    if (currentcharValue > startChar && currentcharValue < endChar) {
      sum += currentcharValue;
    }
  }
  console.log(sum);
}

sumator(['.', '@', 'dsg12gr5653feee5']);
sumator(['?', 'E', '@ABCEF']);
sumator(['a', '1', 'jfe392$#@j24ui9ne#@$']);

