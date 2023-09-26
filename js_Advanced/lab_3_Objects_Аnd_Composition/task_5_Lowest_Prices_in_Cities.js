// Task 5 - Lowest Prices in Cities

function lowestPrice(inputArr) {
  let dataBase = {};

  for (let element of inputArr) {
    let [town, product, price] = element.split(' | ');
    price = Number(price);
    if (dataBase.hasOwnProperty(product)) {
      if (dataBase[product].price > price) {
        dataBase[product].price = price;
        dataBase[product].town = town;
      }
    } else {
      dataBase[product] = {
        town,
        price,
      };
    }
  }
  for (const key in dataBase) {
    console.log(`${key} -> ${dataBase[key].price} (${dataBase[key].town})`);
  }
}

lowestPrice([
  'Sample Town | Sample Product | 1000',

  'Sample Town | Orange | 2',

  'Sample Town | Peach | 1',

  'Sofia | Orange | 3',

  'Sofia | Peach | 2',

  'New York | Sample Product | 1000.1',

  'New York | Burger | 10',
]);
