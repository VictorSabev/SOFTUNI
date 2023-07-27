// Problem 1 - Password Reset

function passwordReset(input) {
  let currentPassword = input.shift();

  let instructions = input.shift();

  while (instructions !== 'Done') {
    instructions = instructions.split(' ');
    let command = instructions.shift();

    switch (command) {
      case 'TakeOdd':
        let newPassword = '';
        for (let i = 0; i < currentPassword.length; i++) {
          if (i % 2 !== 0) {
            newPassword += currentPassword[i];
          }
        }
        currentPassword = newPassword;
        console.log(currentPassword);
        break;

      case 'Cut':
        let startIndex = Number(instructions[0]);
        let endIndex = startIndex + Number(instructions[1]);

        let tempString = currentPassword.substring(startIndex, endIndex);
        currentPassword = currentPassword.replace(tempString, '');
        console.log(currentPassword);
        break;

      case 'Substitute':
        let substring = instructions[0];
        let substitute = instructions[1];

        if (currentPassword.includes(substring)) {
          while (currentPassword.includes(substring)) {
            currentPassword = currentPassword.replace(substring, substitute);
          }
          console.log(currentPassword);
        } else {
          console.log('Nothing to replace!');
        }

        break;
    }

    instructions = input.shift();
  }
  console.log(`Your password is: ${currentPassword}`);
}

passwordReset([
  'Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr',
  'TakeOdd',
  'Cut 15 3',
  'Substitute :: -',
  'Substitute | ^',
  'Done',
]);
console.log('----------');
passwordReset([
  'up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy',
  'TakeOdd',
  'Cut 18 2',
  'Substitute ! ***',
  'Substitute ? .!.',
  'Done',
]);
