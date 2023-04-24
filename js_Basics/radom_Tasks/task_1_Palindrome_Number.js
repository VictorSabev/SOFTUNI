// Palindrome Number


/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let num = String(x);
  for (let start = 0, end=num.length - 1; Math.floor(num.length/2) > start; start++,end--) {
      if (num[start] !== num[end] ) return false;
        
  } 
  return true;
};

isPalindrome(-121)