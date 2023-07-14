// Task 2 - Serialize String

function serialize(input) {
  let string = input[0];
  let checkCharArr = []; // arr to stor all the chars we already looped

  for (let i = 0; i < string.length; i++) {
    // iterate over all chars in the input string
    let char = string[i];

    if (!checkCharArr.includes(char)) {
      // only if the char is NOT included in the check array we loop over all the chars after it
      checkCharArr.push(char); // the checked element is pushed into the check array so we do not loop over it again
      let resultArr = [i]; // the result array is initiated with the first value and then all the indexes are stored in it

      for (let a = i + 1; a < string.length; a++) {
        if (char === string[a]) {
          resultArr.push(a);
        }
      }
      console.log(`${char}:${resultArr.join('/')}`);
    }
  }
}

serialize(['abababa']);
serialize(['avjavamsdmcalsdm']);
