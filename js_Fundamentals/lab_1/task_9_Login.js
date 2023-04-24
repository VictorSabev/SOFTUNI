// Task 9 - Login

function login(input) {
  let index = 0;
  let userName = input[index];
  index++;
  let entry = input[index];
  index++;

  let password = userName.split('').reverse().join('');
  let counter = 0;

  while (entry !== password) {
    counter++;
    if (counter < 4) {
      console.log('Incorrect password. Try again.');
    } else {
      console.log(`User ${userName} blocked!`);
      break;
    }

    entry = input[index];
    index++;
  }

  if (entry === password) {
    console.log(`User ${userName} logged in.`);
  }
}

login(['Acer', 'login', 'go', 'let me in', 'recA']);
login(['momo', 'omom']);
login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);
