// Zadacha 2 - Report System

function Demo(input) {
  let index = 0;
  let target = Number(input[index]);
  index++;
  let command = input[index];
  index++;

  let transaction = 0;
  let transactionCount = 0;
  let cashTransactions = 0;
  let cashTransactionsCount = 0;
  let cardTransactions = 0;
  let cardTransactionsCount = 0;

  while (command !== 'End') {
    transaction = Number(command);

    if (index % 2 === 0 && transaction <= 100) {
      cashTransactions += transaction;
      cashTransactionsCount++;
      transactionCount += transaction;
      console.log('Product sold!');
    } else if (index % 2 !== 0 && transaction >= 10) {
      cardTransactions += transaction;
      cardTransactionsCount++;
      transactionCount += transaction;
      console.log('Product sold!');
    } else {
      console.log('Error in transaction!');
    }

    if (transactionCount >= target) {
      console.log(`Average CS: ${(cashTransactions / cashTransactionsCount).toFixed(2)}`);
      console.log(`Average CC: ${(cardTransactions / cardTransactionsCount).toFixed(2)}`);
      break;
    }

    command = input[index];
    index++;
  }

  if (transactionCount < target) {
    console.log('Failed to collect required money for charity.');
  }
}

Demo(['500', '120', '8', '63', '256', '78', '317']);
console.log('---------------------------');
Demo(['600', '86', '150', '98', '227', 'End']);
