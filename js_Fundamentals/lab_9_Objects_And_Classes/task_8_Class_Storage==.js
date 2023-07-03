// Task 8 - Class Storage

class Storage {
  constructor(capacity) {
    this.capacity = capacity;
    this.storage = {};
    this.storage.name = '';
    this.storage.price = 0;
    this.storage.quantity = 0;
    this.storage.totalCost = storage.price * storage.quantity;
  }

  addProduct(product) {
    this.storage += product;
  }

  getProcuts(storage) {
    let convertedOutput = JSON.stringfy(storage);
    return convertedOutput;
  }
}

let productOne = {
  name: 'Cucamber',

  price: 1.5,
  quantity: 15,
};

let productTwo = {
  name: 'Tomato',

  price: 0.9,
  quantity: 25,
};

let productThree = {
  name: 'Bread',

  price: 1.1,
  quantity: 8,
};

let storage = new Storage(50);

storage.addProduct(productOne);

storage.addProduct(productTwo);

storage.addProduct(productThree);

console.log(storage.getProducts());

console.log(storage.capacity);

console.log(storage.totalCost);
