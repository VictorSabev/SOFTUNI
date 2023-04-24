// Task 4 - Password Guess

function Demo(input) {
  let password = String(input[0]);

  if (password === 's3cr3t!P@ssw0rd') {
    console.log('Welcome');
  } else {
    console.log('Wrong password!');
  }
}

Demo(['qwerty']);
Demo(['s3cr3t!P@ssw0rd']);
Demo(['s3cr3t!p@ss']);
