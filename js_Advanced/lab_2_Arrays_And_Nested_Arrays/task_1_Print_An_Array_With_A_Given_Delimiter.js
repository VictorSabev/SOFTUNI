// Task 1 - Print an Array with a Given Delimiter

function printer(inputArr, delimiter) {
  let result = inputArr.join(delimiter);
  console.log(result);
}

printer(['One', 'Two', 'Three', 'Four', 'Five'], '-');
printer(['How about no?', 'I', 'will', 'not', 'do', 'it!'], '_');
