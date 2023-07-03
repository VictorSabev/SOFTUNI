// Task 3 - Store Provision

function storeProvisions(itemsInStock, delivery) {
  let storeInventory = {};

  for (let i = 0; i < delivery.length; i = i + 2) {
    let checkedItem = delivery[i];

    if (itemsInStock.includes(checkedItem)) {
      let checkedIndex = itemsInStock.indexOf(checkedItem);
      itemsInStock[checkedIndex + 1] = Number(itemsInStock[checkedIndex + 1]) + Number(delivery[i + 1]);
    } else if (!itemsInStock.includes(delivery[i])) {
      itemsInStock.push(delivery[i]);
      itemsInStock.push(delivery[i + 1]);
    }
  }

  for (let i = 0; i < itemsInStock.length; i = i + 2) {
    let currentItem = itemsInStock[i];
    let quantity = itemsInStock[i + 1];
    storeInventory[currentItem] = quantity;
    console.log(`${currentItem} -> ${quantity}`);
  }
}

storeProvisions(
  ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],

  ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
);
console.log('------------------');
storeProvisions(['Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'], ['Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30']);
