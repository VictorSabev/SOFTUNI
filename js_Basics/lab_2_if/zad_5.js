// Zadacha 5 - Number 100..200

function Demo(input) {
  let num = Number(input[0]);

  if (num < 100) {
    console.log('Less than 100');
  } else if (num >= 100 && num <= 200) {
    console.log('Between 100 and 200');
  } else if (num > 200) {
    console.log('Greater than 200');
  }
}

Demo(['95']);
Demo(['120']);
Demo(['210']);