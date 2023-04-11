// Zadacha 2 - Bracelet Stand

function Demo(input) {
  let allowance = Number(input[0]);
  let income = Number(input[1]);
  let expenses = Number(input[2]);
  let giftPrice = Number(input[3]);

  let days = 5;
  let totalAmount = (allowance + income) * days - expenses;

  let diference = Math.abs(totalAmount - giftPrice);

  if (totalAmount >= giftPrice) {
    console.log(`Profit: ${totalAmount.toFixed(2)} BGN, the gift has been purchased.`);
  } else {
    console.log(`Insufficient money: ${diference.toFixed(2)} BGN.`);
  }
}

Demo(['5.12', '32.05', '15', '150']);
Demo(['2.10', '17.50', '20.20', '148.50']);
Demo(['15.20', '200.00', '7.30', '1500.12']);
