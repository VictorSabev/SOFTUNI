// Task 8 - Class Storage

class Storage {
  constructor(capacity) {
    this.capacity = capacity;
    this.totalCost = 0;
    this.storage = []; // initialising storage not as an object but as an array
  }

  addProduct(product) {
    this.storage.push(product); // every time the addProduct function is called the new product object is pushed into the array
    this.capacity -= product.quantity;
    this.totalCost += product.price * product.quantity;
  }

  getProducts() {
    return this.storage.map((product) => JSON.stringify(product)).join('\n'); // using map method each element (object) is beeing formated to JSON and printed separetly suing join method
  }
}
// let productOne = {
//   name: 'Cucamber',

//   price: 1.5,
//   quantity: 15,
// };

// let productTwo = {
//   name: 'Tomato',

//   price: 0.9,
//   quantity: 25,
// };

// let productThree = {
//   name: 'Bread',

//   price: 1.1,
//   quantity: 8,
// };

// let storage = new Storage(50);

// storage.addProduct(productOne);

// storage.addProduct(productTwo);

// storage.addProduct(productThree);

// console.log(storage.getProducts());

// console.log(storage.capacity);

// console.log(storage.totalCost);

let productOne = {
  name: 'Tomato',

  price: 0.9,
  quantity: 19,
};

let productTwo = {
  name: 'Potato',

  price: 1.1,
  quantity: 10,
};

let storage = new Storage(30);

storage.addProduct(productOne);

storage.addProduct(productTwo);

console.log(storage.totalCost);
