// Task 2 - Even Or Odd

function isOddOrEven(string) {

  if (typeof(string) !== 'string') {
  
  return undefined;
  
  }
  
  if (string.length % 2 === 0) {
  
  return "even";
  
  }
  
  return "odd";
  
  }

  module.exports = isOddOrEven;