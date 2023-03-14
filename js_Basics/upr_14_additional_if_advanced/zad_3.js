// Zadacha 3 - Flowers

function Demo(input) {
  let index = 0;
  let hrizantemiBought = Number(input[index]);
  index++;
  let rosesBought = Number(input[index]);
  index++;
  let laletaBought = Number(input[index]);
  index++;
  let season = input[index];
  index++;
  let ifHoliday = input[index];
  index++;

  let hrizantemiPrice = 0;
  let rosesPrice = 0;
  let laletaPrice = 0;

  if (season === 'Spring' || season === 'Summer') {
    hrizantemiPrice = 2;
    rosesPrice = 4.1;
    laletaPrice = 2.5;
  } else if (season === 'Autumn' || season === 'Winter') {
    hrizantemiPrice = 3.75;
    rosesPrice = 4.5;
    laletaPrice = 4.15;
  }
  let flowersBought = hrizantemiBought + rosesBought + laletaBought;
  let bouquetPrice = hrizantemiBought * hrizantemiPrice + rosesBought * rosesPrice + laletaBought * laletaPrice;

  if (ifHoliday === 'Y') {
    bouquetPrice *= 1.15;
  }

  if (laletaBought > 7 && season === 'Spring') {
    bouquetPrice = bouquetPrice - bouquetPrice * 0.05;
  }
  if (rosesBought >= 10 && season === 'Winter') {
    bouquetPrice = bouquetPrice - bouquetPrice * 0.1;
  }
  if (flowersBought > 20) {
    bouquetPrice = bouquetPrice - bouquetPrice * 0.2;
  }

  let laborPrice = 2;

  let totalCost = bouquetPrice + laborPrice;

  console.log(totalCost.toFixed(2));
}

Demo(['2', '4', '8', 'Spring', 'Y']);
Demo(['3', '10', '9', 'Winter', 'N']);
Demo(['10', '10', '10', 'Autumn', 'N']);
