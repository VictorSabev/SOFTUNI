// Task 7 - List of Products

// My initial solution 80/100

// function listOfProducts(products) {
//   let orderedList = products.sort((a, b) => a.localeCompare(b));  // when using "products.sort();" -> 100 / 100
//   let newList = [];
//   for (let i = 0; i < orderedList.length; i++) {
//     newList.push(i + 1 + '.' + orderedList[i]);
//   }
//   console.log(newList.join('\n'));
// }

function listOfProducts(products) {
  let orderedList = products.sort(); //   when using "products.sort((a, b) => a.localeCompare(b));"  80 / 100
  let newList = [];
  for (let i = 0; i < orderedList.length; i++) {
    console.log(`${i + 1}.${orderedList[i]}`);
  }
}

listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);
listOfProducts(['Watermelon', 'Banana', 'Apples']);
