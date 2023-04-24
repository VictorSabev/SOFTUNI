// Task 10 - Invalid Number

function Demo(input) {
  let number = Number(input[0]);

  if ((number >= 100 && number <= 200 && Number.isInteger(number)) || number === 0) {
  } else {
    console.log('invalid');
  }
}

Demo(['75']);
Demo(['150']);
Demo(['220']);
Demo(['119']);
Demo(['-1']);
Demo(['100']);
Demo(['200']);
Demo(['0']);
