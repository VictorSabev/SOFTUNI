// Task 8 - Array Manipulator

function arrayPuppeteer(arrayOfNumbers, commandPrompt) {
  let commandPromptCopy = commandPrompt.slice(0); // make copy of the original array in order to remove elements and loop using original array length
  for (let i = 0; i < commandPrompt.length; i++) {
    let instructions = commandPromptCopy.shift().split(' '); // remove the first element from comandPrompt array and transforms it into an array
    let command = instructions.shift(); // store the command in a new variable
    let commandParameters = instructions.map(Number); // convert the command parameters from strings to numbers

    let index = commandParameters[0];
    let element = commandParameters[1];

    switch (command) {
      case 'add':
        arrayOfNumbers.splice(index, 0, element); // adding element in an array after certain index
        break;
      case 'addMany': // adding several elements in an array after certain index
        for (let i = 1; i < commandParameters.length; i++) {
          arrayOfNumbers.splice(index, 0, commandParameters[i]);
          index++;
        }
        break;
      case 'contains': // checking if certain elemnt occur and print the first index else print 0
        if (arrayOfNumbers.includes(index)) {
          console.log(arrayOfNumbers.indexOf(index));
        } else {
          console.log(-1);
        }
        break;
      case 'remove': // remove an element
        arrayOfNumbers.splice(index, 1);
        break;
      case 'shift': // shift the elements of the array
        for (let i = 0; i < index; i++) {
          let puppet = arrayOfNumbers.shift();
          arrayOfNumbers.push(puppet);
        }
        break;
      case 'sumPairs':
        let newArray = [];
        for (let i = 0; i < arrayOfNumbers.length; i = i + 2) {
          let sumPairs = arrayOfNumbers[i] + arrayOfNumbers[i + 1];
          if (isNaN(sumPairs)) {
            // if the array length is a odd number we need to add tha last element to the new array
            sumPairs = arrayOfNumbers[arrayOfNumbers.length - 1];
          }
          newArray.push(sumPairs);
        }

        arrayOfNumbers = newArray.slice(0);
        break;
      case 'print':
        console.log(`[ ${arrayOfNumbers.join(', ')} ]`);
        return;
    }
  }
}

arrayPuppeteer([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print']);
console.log('----------');
arrayPuppeteer([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);
