// Tennis Ranklist

function Demo(input) {
  let index = 0;
  let tournamentsNumber = Number(input[index]);
  index++;
  let startingPoints = Number(input[index]);
  index++;
  let score = 0;
  let numberOfWins = 0;

  for (let i = 0; i < tournamentsNumber; i++) {
    let currentTournamentStage = input[index];
    index++;
    if (currentTournamentStage === 'SF') {
      score += 720;
    } else if (currentTournamentStage === 'F') {
      score += 1200;
    } else if (currentTournamentStage === 'W') {
      score += 2000;
      numberOfWins++;
    }
  }
  let finalScore = startingPoints + score;
  let avgPoints = Math.floor((score = score / tournamentsNumber));
  let winPercent = (numberOfWins / tournamentsNumber) * 100;
  console.log(`Final points: ${finalScore}`);
  console.log(`Average points: ${avgPoints}`);
  console.log(`${winPercent.toFixed(2)}%`);
}

Demo(['5', '1400', 'F', 'SF', 'W', 'W', 'SF']);
console.log('-------------------');
Demo(['4', '750', 'SF', 'W', 'SF', 'W']);
console.log('-------------------');
Demo(['7', '1200', 'SF', 'F', 'W', 'F', 'W', 'SF', 'W']);
