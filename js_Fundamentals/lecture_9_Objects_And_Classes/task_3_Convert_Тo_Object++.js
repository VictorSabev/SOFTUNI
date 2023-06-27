// Task 3 - Convert to Object

function convertToObject(input) {
  let convertedInput = JSON.parse(input);
  for (let i of Object.keys(convertedInput)) {
    console.log(`${i}: ${convertedInput[i]}`);
  }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
convertToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}');
