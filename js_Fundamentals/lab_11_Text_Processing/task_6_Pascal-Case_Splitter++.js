// Task 6 - Pascal-Case Splitter

function pascalDictionary(input) {
  // my initial solution

  // let cuurrentStartLetterIndex = 0;
  // let currentWord = '';
  // let resultArr = [];

  // for (let i = 1; i < input.length; i++) {
  //   let currentLetter = input[i];
  //   let testCharCode = currentLetter.charCodeAt();

  //   if (testCharCode >= 65 && testCharCode <= 90) {
  //     currentEndLetterIndex = i;
  //     currentWord = input.substring(
  //       cuurrentStartLetterIndex,
  //       currentEndLetterIndex
  //     );

  //     resultArr.push(currentWord);
  //     cuurrentStartLetterIndex = i;
  //   }

  //   if (i === input.length - 1) {
  //     currentWord = input.substring(cuurrentStartLetterIndex);
  //     resultArr.push(currentWord);
  //   }
  // }
  // console.log(resultArr.join(', '));

  
  // lecturer solution:

  const currentLetter = input[0];
  const inputLower = input.toLowerCase();
  let result = currentLetter;

  for (let i = 1; i < input.length; i++) {
    if (input[i] !== inputLower[i]) {
      result += ', ';
    }
    result += input[i];
  }
  console.log(result);
}

pascalDictionary('SplitMeIfYouCanHaHaYouCantOrYouCan');
pascalDictionary('HoldTheDoor');
pascalDictionary('ThisIsSoAnnoyingToDo');
