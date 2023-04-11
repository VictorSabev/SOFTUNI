// Zadacha 3 - Mobile operator

function Demo(input) {
  let contractPeriod = input[0];
  let contractType = input[1];
  let internet = input[2];
  let monthsToPay = Number(input[3]);

  let price = 0;
  let discount = 0;

  if (contractPeriod === 'one') {
    switch (contractType) {
      case 'Small':
        price = 9.98;
        break;
      case 'Middle':
        price = 18.99;
        break;
      case 'Large':
        price = 25.98;
        break;
      case 'ExtraLarge':
        price = 35.99;
        break;
    }
  } else if (contractPeriod === 'two') {
    switch (contractType) {
      case 'Small':
        price = 8.58;
        break;
      case 'Middle':
        price = 17.09;
        break;
      case 'Large':
        price = 23.59;
        break;
      case 'ExtraLarge':
        price = 31.79;
        break;
    }
  }

  if (internet === 'yes') {
    if (price <= 10) {
      price += 5.5;
    } else if (price > 10 && price <= 30) {
      price += 4.35;
    } else if (price > 30) {
      price += 3.85;
    }
  }

  if (contractPeriod === 'two') {
    discount = 0.0375;
  }

  let totalPrice = (price - price * discount) * monthsToPay;

  console.log(`${totalPrice.toFixed(2)} lv.`);
}

Demo(['one', 'Small', 'yes', '10']);
Demo(['two', 'Large', 'no', '10']);
Demo(['two', 'ExtraLarge', 'yes', '20']);
Demo(['two', 'Small', 'yes', '20']);
