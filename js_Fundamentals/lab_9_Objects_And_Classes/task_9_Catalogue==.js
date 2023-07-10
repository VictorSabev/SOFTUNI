// Task 9 - Catalogue

function catalogue(input) {
  input.sort();
  let newArray = [];
  for (let i of input) {
    let currentArray = i.split(' : ');
    let currentObj = {};
    currentObj[currentArray[0]] = currentArray[1];
    newArray.push(currentObj);
  }
  for (let a = 0; a < newArray.length; a++) {
    let currentElement = newArray[a];
    const key = Object.keys(currentElement)[0]; // Get the key of the current object
    const value = currentElement[key];
    // let firstChar = key.charAt(0);
    // if (a === 0) {
    //   console.log(firstChar);
    // }
    // if (key.charAt(0) !== newArray[a - 1][0]) {
    //   console.log(firstChar);
    // }
    console.log(`${key}: ${value}`);
  }
}

catalogue([
  'Appricot : 20.4',
  'Fridge : 1500',
  'TV : 1499',
  'Deodorant : 10',
  'Boiler : 300',
  'Apple : 1.25',
  'Anti-Bug Spray :  15',
  'T-Shirt : 10',
]);
catalogue(['Omlet : 5.4', 'Shirt : 15', 'Cake : 59']);
