// Task 8 - Travel Time

function travelingPlan(input) {
  let destinations = {};
  for (let entry of input) {
    let [country, city, price] = entry.split(' > ');
    destinations[country] = {}
    console.log(country);
  }
}

travelingPlan([
  'Bulgaria > Sofia > 500',

  'Bulgaria > Sopot > 800',

  'France > Paris > 2000',

  'Albania > Tirana > 1000',

  'Bulgaria > Sofia > 200',
]);
travelingPlan([
  'Bulgaria > Sofia > 25000',

  'Bulgaria > Sofia > 25000',

  'Kalimdor > Orgrimar > 25000',

  'Albania > Tirana > 25000',

  'Bulgaria > Varna > 25010',

  'Bulgaria > Lukovit > 10',
]);
