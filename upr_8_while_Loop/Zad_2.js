// Zadacha - 02. Password

function Demo(input) {
  let index = 0;
  let userName = input[index];
  index++;
  let correctPassword = input[index];
  index++;
  let enteredPassword = input[index];

  while (enteredPassword !== correctPassword) {
    index++;
    enteredPassword = input[index];
  }
  console.log(`Welcome ${userName}!`);
}

Demo(['Nakov', '1234', 'Pass', '1324', '1234']);
Demo(['Gosho', 'secret', 'secret']);
