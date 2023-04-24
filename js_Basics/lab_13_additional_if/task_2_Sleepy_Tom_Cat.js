// Task 2 - Sleepy Tom Cat

function Demo(input) {
  let vacationDays = Number(input);
  let workingDaysPlaytime = 63;
  let vacationDaysPlayTime = 127;
  let TomPlayTime = 30000;
  let ownerPlayTime = vacationDays * vacationDaysPlayTime + workingDaysPlaytime * (365 - vacationDays);
  let difference = Math.abs(TomPlayTime - ownerPlayTime);
  let hours = Math.floor(difference / 60);
  let minutes = difference - hours * 60;
  if (ownerPlayTime >= TomPlayTime) {
    console.log('Tom will run away');
    console.log(`${hours} hours and ${minutes} minutes more for play`);
  } else {
    console.log('Tom sleeps well');
    console.log(`${hours} hours and ${minutes} minutes less for play`);
  }
}

Demo('20');
Demo('113');
