// Zadacha 2 - AND Processors

function Procesor(input) {
  let target = Number(input[0]);
  let numberOfEmployees = Number(input[1]);
  let workingDays = Number(input[2]);

  let price = 110.1;
  let normHours = 3;
  let workingHours = 8;

  let totalHours = workingHours * numberOfEmployees * workingDays;
  let totalProduction = Math.floor(totalHours / normHours);

  let diference = Math.abs(totalProduction - target);

  let total = diference * price;

  if (totalProduction >= target) {
    console.log(`Profit: -> ${total.toFixed(2)} BGN`);
  } else {
    console.log(`Losses: -> ${total.toFixed(2)} BGN`);
  }
}

Procesor(['500', '8', '20']);
Procesor(['150', '7', '18']);
