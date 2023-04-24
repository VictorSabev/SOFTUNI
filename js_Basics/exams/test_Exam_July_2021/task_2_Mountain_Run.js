// Task 2 - Mountain Run

function Demo(input) {
  let recordTime = Number(input[0]);
  let distance = Number(input[1]);
  let timePerMeter = Number(input[2]);

  let delay = Math.floor(distance / 50) * 30;
  let subTotal = timePerMeter * distance;
  let finalTime = subTotal + delay;

  let diference = Math.abs(finalTime - recordTime);

  if (finalTime < recordTime) {
    console.log(`Yes! The new record is ${finalTime.toFixed(2)} seconds.`);
  } else {
    console.log(`No! He was ${diference.toFixed(2)} seconds slower.`);
  }
}

Demo(['10164', '1400', '25']);
Demo(['5554.36', '1340', '3.23']);
Demo(['1377', '389', '3']);
