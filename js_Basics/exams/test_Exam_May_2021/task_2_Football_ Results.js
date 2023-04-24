// Task 2 - Football Results

function Demo(input) {
  let result;
  let homeScore = 0;
  let awayScore = 0;
  let winCounter = 0;
  let looseCounter = 0;
  let drawCounter = 0;

  for (let i = 0; i < 3; i++) {
    result = input[i];
    homeScore = Number(result.substring(0, 1));
    awayScore = Number(result.substr(2));
    if (homeScore > awayScore) {
      winCounter++;
    } else if (homeScore === awayScore) {
      drawCounter++;
    } else {
      looseCounter++;
    }
  }
  console.log(`Team won ${winCounter} games.`);
  console.log(`Team lost ${looseCounter} games.`);
  console.log(`Drawn games: ${drawCounter}`);
}

Demo(['3:1', '0:2', '0:0']);
console.log(`----------------`);
Demo(['4:2', '0:3', '1:0']);
console.log(`----------------`);
Demo(['0:2', '0:1', '3:3']);
