// Task 5 - Replace Repeating Chars

function removeRepeatingChars(string) {
  let result = ''; // let resulArr = [];
  
  for (let i = 0; i < string.length; i++) {
    let currentLetter = string[i];
    let nextLetter = string[i + 1];
    
    if (currentLetter !== nextLetter) {
      result += currentLetter; // resultArr.push(cureentLetter);
    }
  }
  console.log(result.trim()); // console.log(resultArr.join(''));
}

removeRepeatingChars('aaaaabbbbbcdddeeeedssaa');
removeRepeatingChars('qqqwerqwecccwd');
