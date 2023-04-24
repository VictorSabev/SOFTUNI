// Task 6 - Speed info

function Demo(input) {
  let speed = Number(input[0]);

  // if (speed >0 && speed <= 10) {
  if (speed <= 10) {
    console.log('slow');
  } else if (speed > 10 && speed <= 50) {
    console.log('average');
  } else if (speed > 50 && speed <= 150) {
    console.log('fast');
  } else if (speed > 150 && speed <= 1000) {
    console.log('ultra fast');
  } else if (speed > 1000) {
    console.log('extremely fast');
  }
}

Demo(['8']);
Demo(['49.5']);
Demo(['126']);
Demo(['160']);
Demo(['3500']);
