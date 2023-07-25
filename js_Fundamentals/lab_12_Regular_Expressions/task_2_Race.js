// Task 2 - Race

function raceDetails([rawNames, ...commands]) {
  let names = rawNames.split(',');

  let participants = {};

  for (const name of names) {
    participants[name.trim()] = 0;
  }

  const namePattern = /[A-Za-z]/g;
  const distanceRanPattern = /\d/g;

  for (const command of commands) {
    if (command === 'end of race') {
      break;
    }

    let name = command.match(namePattern).join('');
    let scoreArr = command.match(distanceRanPattern).map(Number);

    let finalScore = scoreArr.reduce((acc, curr) => acc + curr);

    // for (const score of scoreArr) {
    //   finalScore += score;
    // }

    if (participants.hasOwnProperty(name)) {
      participants[name] += finalScore;
    }
  }

  let sortedArray = Object.entries(participants);
  sortedArray = sortedArray.sort((a, b) => b[1] - a[1]);

  console.log(`1st place: ${sortedArray[0].shift()}`);
  console.log(`2nd place: ${sortedArray[1].shift()}`);
  console.log(`3rd place: ${sortedArray[2].shift()}`);
}

raceDetails([
  'George, Peter, Bill, Tom',

  'G4e@55or%6g6!68e!!@ ',

  'R1@!3a$y4456@',

  'B5@i@#123ll',

  'G@e54o$r6ge#',

  '7P%et^#e5346r',

  'T$o553m&6',

  'end of race',
]);

console.log('-----------');

raceDetails([
  'Ronald, Bill, Tom, Timmy, Maggie, Michonne',

  'Mi*&^%$ch123o!#$%#nne787) ',

  '%$$B(*&&)i89ll)*&) ',

  'R**(on%^&ald992) ',

  'T(*^^%immy77) ',

  'Ma10**$#g0g0g0i0e',

  'end of race',
]);
