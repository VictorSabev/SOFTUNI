// Zdacha 6  - High Jump

function Demo(input) {
  let index = 0;
  let target = Number(input[index]);
  index++;
  let attempt = Number(input[index]);
  index++;

  let currentStart = target - 30;
  let failcounter = 0;
  let attemptsCounter = 0;

  for (let a = 1; a <= input.length; a++) {
    for (let i = 1; i <= 3; i++) {
      attemptsCounter++;
      if (currentStart < attempt) {
        currentStart += 5;
        failcounter = 0;
      } else {
        failcounter;
      }

      if (failcounter === 3) {
        console.log(`Tihomir failed at ${attempt}cm after ${attemptsCounter} jumps.`);
        break;
      }
    }

    attempt = Number(input[index]);
    index++;
  }

  //console.log(`Tihomir failed at ${височина на летвата към момента на провала}cm after ${брой скокове от началото на тренировката} jumps.`);
  //console.log(`Tihomir succeeded, he jumped over #{височина на прескочената последно летва}cm after ${брой скокове за цялата тренировка} jumps.`);
}

Demo(['231', '205', '212', '213', '228', '229', '230', '235']);
console.log('---------------------------');
Demo(['250', '225', '224', '225', '228', '231', '235', '234', '235']);
