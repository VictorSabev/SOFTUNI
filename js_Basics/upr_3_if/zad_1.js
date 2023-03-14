// Zadacha 1 - Sum Seconds

function Demo(input) {
  let timeSec1 = Number(input[0]);
  let timeSec2 = Number(input[1]);
  let timSec3 = Number(input[2]);

  let timeMin = (timeSec1 + timeSec2 + timSec3) / 60;
  let timeClearMin = parseInt(timeMin)
  let timeSeconds = ((timeSec1 + timeSec2 + timSec3) % 60); 

  if (timeSeconds >=0 && timeSeconds < 10) {
    let finalTime = (`${timeClearMin}:0${timeSeconds}`);
    console.log(finalTime);
  } else {
    let finalTime = (`${timeClearMin}:${timeSeconds}`);
    console.log(finalTime);
  }
}

Demo(["35", "45", "44"]);
Demo(["22", "7", "34"]);
Demo(["50", "50", "49"]);
Demo(["14", "12", "10"]);