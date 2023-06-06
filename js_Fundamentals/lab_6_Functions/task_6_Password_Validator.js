// Task 6 - Password Validator

function passwordValidator(password) {
  let passwordLength = password.length;
  let digitsCount = 0;
  let validPassword = true;

  if (passwordLength < 6 || passwordLength > 10) {
    console.log('Password must be between 6 and 10 characters');
  }

  for (let i = 0; i < passwordLength; i++) {
    let asciiCode = password[i].charCodeAt();

    if (asciiCode > 31 && asciiCode < 47) {
      console.log('Password must consist only of letters and digits');
      validPassword = false;
      break;
    }

    if (password[i] * 0 === 0) {
      digitsCount++;
    }
  }

  if (digitsCount < 2) {
    console.log('Password must have at least 2 digits');
    validPassword = false;
  }

  if (validPassword === true) {
    console.log('Password is valid');
  }
}
passwordValidator('logIn');
passwordValidator('MyPass123');
passwordValidator('Pa$s$s');
