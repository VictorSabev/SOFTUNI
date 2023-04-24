// Task 6 - Number in Range

function Demo(input) {
  let number = Number(input[0]);

  if (number >= -100 && number <= 100 && number !== 0) {
    console.log('Yes');
  } else {
    console.log('No');
  }
}

Demo(['-25']);
Demo(['0']);
Demo(['25']);
