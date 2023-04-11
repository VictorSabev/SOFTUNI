// Zadacha 6 - World Swimming Record

function Demo(input) {
  let = recordInSeconds = Number(input[0]);
  let = distanceInMeters = Number(input[1]);
  let = timeInSecondsPerMeter = Number(input[2]);

  let potentialTime = distanceInMeters * timeInSecondsPerMeter;
  let waterResistanceDelay = Math.floor(distanceInMeters / 15) * 12.5;  
  let finalTime = (potentialTime + waterResistanceDelay).toFixed(2);;
  let failedAttpemt = (finalTime - recordInSeconds).toFixed(2);;

  if (finalTime < recordInSeconds) {
    console.log(`Yes, he succeeded! The new world record is ${finalTime} seconds.`);
  } else {
    console.log(`No, he failed! He was ${failedAttpemt} seconds slower.`);
  }

}

Demo(['10464', '1500', '20']);
Demo(['55555.67', '3017' , '5.03']);