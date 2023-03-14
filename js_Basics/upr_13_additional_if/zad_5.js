// Zadacha 5 - Pets

function Demo(input) {
  let index = 0;
  let daysGone = Number(input[index]);
  index++;
  let foodSupply = Number(input[index]);
  index++;
  let dogRations = Number(input[index]);
  index++;
  let catsRations = Number(input[index]);
  index++;
  let turtleRations = Number(input[index]) / 1000;
  index++;

  let foodconsumed = daysGone * (dogRations + catsRations + turtleRations);
  let difference = Math.abs(foodSupply - foodconsumed);

  if (foodconsumed <= foodSupply) {
    console.log(`${Math.floor(difference)} kilos of food left.`);
  } else {
    console.log(`${Math.ceil(difference)} more kilos of food are needed.`);
  }
}

Demo(['2', '10', '1', '1', '1200']);
Demo(['5', '10', '2.1', '0.8', '321']);
