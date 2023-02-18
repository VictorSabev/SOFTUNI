// Zadacha 8 - Lunch Break

function Demo(input) {
  let showTitle = input[0];
  let episodeDuration = Number(input[1]); 
  let breakDuration = Number(input[2]);

  let lunchTime = breakDuration * 0.125;
  let chillTime = breakDuration * 0.25;
  let freeTime = breakDuration - lunchTime - chillTime;

  let plentyTime = Math.ceil(freeTime - episodeDuration);
  let insufficientTime = Math.ceil(episodeDuration - freeTime);


  if (freeTime >= episodeDuration) {
    console.log(`You have enough time to watch ${showTitle} and left with ${plentyTime} minutes free time.`);
  } else {
    console.log(`You don't have enough time to watch ${showTitle}, you need ${insufficientTime} more minutes.`);
  }
}

Demo(['Game of Thrones', '60', '96']);
Demo(['Teen Wolf', '48', '60']);