// Zadacha 6 - Truck Driver

function Demo(input) {
  let season = input[0];
  let kmPerMonth = Number(input[1]);

  let wage = 0;

  if (kmPerMonth <= 5000) {
    switch (season) {
      case 'Spring':
        wage = 0.75;
        break;
      case 'Autumn':
        wage = 0.75;
        break;
      case 'Summer':
        wage = 0.9;
        break;
      case 'Winter':
        wage = 1.05;
        break;
    }
  } else if (kmPerMonth > 5000 && kmPerMonth <= 10000) {
    switch (season) {
      case 'Spring':
        wage = 0.95;
        break;
      case 'Autumn':
        wage = 0.95;
        break;
      case 'Summer':
        wage = 1.1;
        break;
      case 'Winter':
        wage = 1.25;
        break;
    }
  } else if (kmPerMonth > 10000 && kmPerMonth <= 20000) {
    wage = 1.45;
  }

  let salaryBruto = 4 * wage * kmPerMonth;
  let taxes = 0.1;
  let salaryNeto = salaryBruto - salaryBruto * taxes;

  console.log(salaryNeto.toFixed(2));
}

Demo(['Summer', '3455']);
console.log('-----------------');
Demo(['Winter', '4350']);
console.log('-----------------');
Demo(['Spring', '1600']);
console.log('-----------------');
Demo(['Winter', '5678']);
console.log('-----------------');
Demo(['Autumn', '8600']);
console.log('-----------------');
Demo(['Winter', '16042']);
console.log('-----------------');
Demo(['Spring', '16942']);
