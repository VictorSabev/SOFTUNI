// Task 3 - Even or Odd

function Demo(input) {
  let num = Number(input[0]);

  if (num % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}

Demo(['2']);
Demo(['3']);
Demo(['25']);
Demo(['1024']);
