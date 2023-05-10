// Task 8 - Centuries to Minutes

function timeConverter(centurie) {
  const years = centurie * 100;
  const days = Math.trunc(years * 365.2422);
  const hours = days * 24;
  const minutes = hours * 60;

  console.log(`${centurie} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`);
}

timeConverter(1);
timeConverter(5);
