// Task 1 - Excellent

function Demo(input) {
  let score = Number(input[0]);
  if (score >= 5.5) {
    console.log('Excellent!');
  } else {
    return;
  }
}

Demo(['6']);
Demo(['5']);
Demo(['5.5']);
Demo(['5.49']);
