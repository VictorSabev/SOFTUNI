// Zadacha 5 - Christmas gifts

function Gifts(input) {
  let index = 0;
  let command = input[index];
  index++;

  let toyPrice = 5;
  let sweaterPrice = 15;

  let age = 0;
  let kidsCounter = 0;
  let adultsCounter = 0;

  while (command !== 'Christmas') {
    age = Number(command);

    if (age <= 16) {
      kidsCounter++;
    } else {
      adultsCounter++;
    }

    command = input[index];
    index++;
  }

  let toysCost = kidsCounter * toyPrice;
  let sweatersCost = adultsCounter * sweaterPrice;

  console.log(`Number of adults: ${adultsCounter}`);
  console.log(`Number of kids: ${kidsCounter}`);
  console.log(`Money for toys: ${toysCost}`);
  console.log(`Money for sweaters: ${sweatersCost}`);
}

Gifts(['16', '20', '46', '12', '8', '20', '49', 'Christmas']);
console.log('-----------------');
Gifts(['16', '16', '16', '16', '16', 'Christmas']);
console.log('-----------------');
Gifts(['18', '20', '48', '45', '56', '37', '12', '14', 'Christmas']);
