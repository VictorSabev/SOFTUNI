// Task 4 - Orders

function vendingMachine(product, quantity) {
  let productPrice = 0;
  switch (product) {
    case 'coffee':
      productPrice = 1.5;
      break;
    case 'water':
      productPrice = 1;
      break;
    case 'coke':
      productPrice = 1.4;
      break;
    case 'snacks':
      productPrice = 2;
      break;
  }
  let result = productPrice * quantity;
  console.log(result.toFixed(2));
}

vendingMachine('water', 5);
vendingMachine('coffee', 2);
