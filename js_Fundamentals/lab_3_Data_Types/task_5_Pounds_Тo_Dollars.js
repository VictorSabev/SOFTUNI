// Task 5 - Pounds to Dollars

function currencyConverotr(GBP) {
  const exchangeRate = 1.31;
  const resultInUSD = GBP * exchangeRate;
  console.log(resultInUSD.toFixed(3));
}

currencyConverotr(80);
currencyConverotr(39);
