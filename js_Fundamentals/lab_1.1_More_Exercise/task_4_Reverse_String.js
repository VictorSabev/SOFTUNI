// Task 4 - Reverse String

function reverseString(input) {
  let string = String(input);
  string = string.split('').reverse().join('');
  console.log(string);
}

reverseString('Hello');
reverseString('SoftUni');
reverseString(1234);
