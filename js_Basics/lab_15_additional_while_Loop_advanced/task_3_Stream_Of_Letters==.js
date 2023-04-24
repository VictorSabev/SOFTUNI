// Task 3 - Stream Of Letters

function Demo(input) {
  let index = 0;
  let command = input[index];
  index++;
  let indexC = 0;
  let indexO = 0;
  let indexN = 0;
  let indexCON = 0;
  let letter = '';
  let word = '';

  while (command !== 'End') {
    letter = command;

    if (letter.match(/[a-z]/i)) {
    } else {
      letter = '';
    }

    if (letter === 'c') {
      if (indexC === 0) {
        letter = '';
        indexC++;
      }
    } else if (letter === 'o') {
      if (indexO === 0) {
        letter = '';
        indexO++;
      }
    } else if (letter === 'n') {
      if (indexN === 0) {
      }
      letter = '';
      indexN++;
    }

    if (indexC !== 0 && indexO !== 0 && indexN !== 0) {
      if (indexCON !== 0) {
        console.log(word);
      }
      indexC = 0;
      indexN = 0;
      indexO = 0;
      indexCON++;
      letter = ' ';
    }

    word += letter;

    command = input[index];
    index++;
  }
}

Demo(['H', 'n', 'e', 'l', 'l', 'o', 'o', 'c', 't', 'c', 'h', 'o', 'e', 'r', 'e', 'n', 'e', 'End']);
Demo(['%', '!', 'c', '^', 'B', '`', 'o', '%', 'o', 'o', 'M', ')', '{', 'n', '\\', 'A', 'D', 'End']);
Demo(['o', 'S', '%', 'o', 'l', '^', 'v', 'e', 'c', 'n', '&', 'm', 'e', 'c', 'o', 'n', 'End']);
