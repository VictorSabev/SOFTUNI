// Task 5 - Palindrome Integers

function checkPalindrome(input) {
  for (let i of input) {
    let numberAsString = i.toString();
    let reversedArray = numberAsString.split('').reverse();
    let reversedString = reversedArray.join('');

    if (numberAsString === reversedString) {
      console.log('true');
    } else {
      console.log('false');
    }
  }
}

checkPalindrome([123, 323, 421, 121]);
checkPalindrome([32, 2, 232, 1010]);
