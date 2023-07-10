// Task 2 - Meetings

function meetings(input) {
  let appointments = {};
  
  for (const entry of input) {
    let [weekDay, person] = entry.split(' ');
  
    if (appointments[weekDay]) {
      console.log(`Conflict on ${weekDay}!`);
     } else {
      appointments[weekDay] = person;
      console.log(`Scheduled for ${weekDay}`);
    }
  }
  for (const i in appointments) {
    console.log(`${i} -> ${appointments[i]}`);
  }
}

meetings(['Monday Peter', 'Wednesday Bill', 'Monday Tim', 'Friday Tim']);
console.log('-----------');
meetings([
  'Friday Bob',

  'Saturday Ted',

  'Monday Bill',

  'Monday John',

  'Wednesday George',
]);
