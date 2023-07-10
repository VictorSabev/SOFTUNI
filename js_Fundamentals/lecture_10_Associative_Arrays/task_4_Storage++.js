// Task 4 - Storage

// solution using an Object:

// function storage(input) {
//   let instock = {};

//   for (let i of input) {
//     let [item, quantity] = i.split(' ');
//     if (instock[item]) {
//       instock[item] += Number(quantity);  // !!!
//     } else {
//       instock[item] = Number(quantity);
//     }
//   }

//   for (const entry in instock) {
//     console.log(`${entry} -> ${instock[entry]}`);
//   }
// }

//solution using Map:

function storage(input) {
  let map = new Map();
  for (let i of input) {
    let [item, quantity] = i.split(' ');
    quantity = Number(quantity);
    if (map.has(item)) {
      quantity += map.get(item);
    }
    map.set(item, quantity);
  }
  for (const [key, value] of map) {
    console.log(`${key} -> ${value}`);
  }
}

storage(['tomatoes 10', 'coffee 5', 'olives 100', 'coffee 40']);

storage(['apple 50', 'apple 61', 'coffee 115', 'coffee 40']);
