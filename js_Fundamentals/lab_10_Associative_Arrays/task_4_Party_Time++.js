// Task 4 - Party Time

// lecturer solution:

function partyTime(input) {
  let imperialOfficers = [];
  let rebelScum = [];

  let command = input.shift();

  while (command !== 'PARTY') {
    let currentGuest = command;

    if (isNaN(currentGuest[0])) {
      rebelScum.push(currentGuest);
    } else {
      imperialOfficers.push(currentGuest);
    }

    command = input.shift();
  }

  let neverInviteingAgain = imperialOfficers.concat(rebelScum);

  for (const sonOfABitch of input) {
    neverInviteingAgain.splice(neverInviteingAgain.indexOf(sonOfABitch), 1);
  }

  console.log(neverInviteingAgain.length);

  neverInviteingAgain.forEach((bitch) => {
    console.log(bitch);
  });
}

//my initialsolution - leads to edge cases:

// function partyTime(input) {
//   let guestsPresent = {};

//   let indexBreaker = input.indexOf('PARTY');
//   let present = input.slice(indexBreaker + 1, input.length);

//   for (const guest of present) {
//     guestsPresent[guest] = 'In the house';
//   }

//   let command = input.shift();

//   let neverInvitingAgain = {};
//   let notPresentCounter = 0;

//   while (command !== 'PARTY') {
//     let currentGuest = command;

//     if (!guestsPresent.hasOwnProperty(currentGuest)) {
//       notPresentCounter++;

//       if (isNaN(currentGuest[0])) {
//         neverInvitingAgain[currentGuest] = 'REBEL SCUM';
//       } else {
//         neverInvitingAgain[currentGuest] = 'Imperial officer';
//       }
//     }

//     command = input.shift();
//   }

//   let arraySort = Object.entries(neverInvitingAgain);
//   arraySort.sort((a, b) => a[1] - b[1]);

//   console.log(arraySort.length);

//   for (const sonOfABitch of arraySort) {
//     console.log(sonOfABitch[0]);
//   }
// }

partyTime([
  '7IK9Yo0h',
  '9NoBUajQ',
  'Ce8vwPmE',
  'SVQXQCbc',
  'tSzE5t0p',
  'PARTY',
  '9NoBUajQ',
  'Ce8vwPmE',
  'SVQXQCbc',
]);
console.log('--------');
partyTime([
  'm8rfQBvl',
  'fc1oZCE0',
  'UgffRkOn',
  '7ugX7bm0',
  '9CQBGUeJ',
  '2FQZT3uC',
  'dziNz78I',
  'mdSGyQCJ',
  'LjcVpmDL',
  'fPXNHpm1',
  'HTTbwRmM',
  'B5yTkMQi',
  '8N0FThqG',
  'xys2FYzn',
  'MDzcM9ZK',
  'PARTY',
  '2FQZT3uC',
  'dziNz78I',
  'mdSGyQCJ',
  'LjcVpmDL',
  'fPXNHpm1',
  'HTTbwRmM',
  'B5yTkMQi',
  '8N0FThqG',
  'm8rfQBvl',
  'fc1oZCE0',
  'UgffRkOn',
  '7ugX7bm0',
  '9CQBGUeJ',
]);
