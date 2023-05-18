// Task 7 - Lower or Upper
function caseSensitive(char) {
  if (/[A-Z]/.test(char)) {    // char.toUpperCase(); 
    console.log('upper-case');
  } else {
    console.log('lower-case');
  }
}

caseSensitive('L');
caseSensitive('f');
