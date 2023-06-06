// Task 3 - Repeat String

function stringRepeat(str, repeatCount) {
  let result = '';
  for (let i = 0; i < repeatCount; i++) {
    // mojem da izpolzvame i metod: .repeat();
    result += str;
  }
  console.log(result); // return result; - vrashtame rezultata ot funkciqta
}

stringRepeat('abc', 3); // let returnedResult = stringRepeat('abc', 3); - iznasqme rezultata ot funkciqta v promenliva
// console.log(returnedResult); - prinitrame v konzolata stoinostta na promenlivata.
stringRepeat('String', 2);
