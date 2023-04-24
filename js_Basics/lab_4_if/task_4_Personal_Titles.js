// Task 4 - Personal Titles

function Demo(input) {
  let age = Number(input[0]);
  let sex = input[1];

  if (age >= 16 && sex === 'm') {
    console.log('Mr.');
  } else if (age < 16 && sex === 'm') {
    console.log('Master');
  } else if (age >= 16 && sex === 'f') {
    console.log('Ms.');
  } else if (age < 16 && sex === 'f') {
    console.log('Miss');
  }
}

Demo(['12', 'f']);
Demo(['17', 'm']);
Demo(['25', 'f']);
Demo(['13.5', 'm']);
