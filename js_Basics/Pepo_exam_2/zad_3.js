// Zadacha 3 - Candyshop

function Candy(input) {
  let candyType = input[0];
  let candyQuantity = Number(input[1]);
  let dayOfTheMonth = Number(input[2]);

  let price = 0;
  let discount = 0;
  let additionalDiscount = 0;

  if (dayOfTheMonth >= 1 && dayOfTheMonth <= 15) {
    switch (candyType) {
      case 'Cake':
        price = 24;
        break;
      case 'Souffle':
        price = 6.66;
        break;
      case 'Baklava':
        price = 12.6;
        break;
    }
  } else if (dayOfTheMonth > 15 && dayOfTheMonth <= 31) {
    switch (candyType) {
      case 'Cake':
        price = 28.7;
        break;
      case 'Souffle':
        price = 9.8;
        break;
      case 'Baklava':
        price = 16.98;
        break;
    }
  }
  let subTotal = candyQuantity * price;

  if (dayOfTheMonth >= 1 && dayOfTheMonth <= 22) {
    if (subTotal >= 100 && subTotal <= 200) {
      discount = 0.15;
    } else if (subTotal > 200) {
      discount = 0.25;
    }
  }
  if (dayOfTheMonth >= 1 && dayOfTheMonth <= 15) {
    additionalDiscount = 0.1;
  }

  let subtotal2 = subTotal - subTotal * discount;
  let totalCost = subtotal2 - subtotal2 * additionalDiscount;

  console.log(totalCost.toFixed(2));
}

Candy(['Cake', '10', '15']);
Candy(['Souffle', '20', '24']);
Candy(['Baklava', '50', '1']);
Candy(['Cake', '5', '12']);
