// Zadacha 2 - Movie Day

function Demo(input) {
  let totalTime = Number(input[0]);
  let numberScenes = Number(input[1]);
  let sceneTime = Number(input[2]);

  let preperations = totalTime * 0.15;
  let timeShooting = numberScenes * sceneTime;
  let timeNeeded = preperations + timeShooting;

  let diference = Math.abs(totalTime - timeNeeded);

  if (totalTime >= timeNeeded) {
    console.log(`You managed to finish the movie on time! You have ${diference.toFixed(0)} minutes left!`);
  } else {
    console.log(`Time is up! To complete the movie you need ${diference.toFixed(0)} minutes.`);
  }
}

Demo(['120', '10', '11']);
Demo(['60', '15', '3']);
