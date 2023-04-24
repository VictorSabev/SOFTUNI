// Task 1 - Clock

function Demo() {
  for (let hours = 0; hours <= 23; hours++) {
    for (let min = 0; min < 60; min++) {
      //if (min < 10) {
      // console.log(`${hours}:0${min}`);
      //} else {
      console.log(`${hours}:${min}`);
      // }
    }
  }
}

Demo();
