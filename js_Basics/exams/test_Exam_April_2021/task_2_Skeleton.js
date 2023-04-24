// Task 2 - Skeleton

function Demo(input) {
  let controlTimeMin = Number(input[0]);
  let controlSeconds = Number(input[1]);
  let trackLength = Number(input[2]);
  let secondsPer100m = Number(input[3]);

  let totalControlTimeInSec = controlTimeMin * 60 + controlSeconds;

  let MarinTime = (trackLength / 100) * secondsPer100m;
  let timeDelay = (trackLength / 120) * 2.5;
  let finalTime = MarinTime - timeDelay;

  let diference = Math.abs(finalTime - totalControlTimeInSec);

  if (finalTime <= totalControlTimeInSec) {
    console.log(`Marin Bangiev won an Olympic quota!`);
    console.log(`His time is ${finalTime.toFixed(3)}.`);
  } else {
    console.log(`No, Marin failed! He was ${diference.toFixed(3)} second slower.`);
  }
}

Demo(['2', '12', '1200', '10']);
Demo(['1', '20', '1546', '12']);
