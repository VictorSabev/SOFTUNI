// Task 6 - List Of Names

function listOfNames(inputArr) {
  let resultArr = inputArr.sort((a, b) => a.localeCompare(b));
  let indicator = 1;

  for (let result of resultArr) {
    console.log(`${indicator}.${result}`);
    indicator++;
  }
}

listOfNames(['John', 'Bob', 'Christina', 'Ema']);
