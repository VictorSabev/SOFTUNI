// Task 2 - Town Population

function townPopulation(inputArr) {
  let dataBase = {};

  for (let element of inputArr) {
    // let data = element.split(' <-> ');
    // let town = data.shift();
    // let population = Number(data.shift());

    let [town, population] = element.split(' <-> '); // array destructering

    if (dataBase.hasOwnProperty(town)) {
      dataBase[town] += population;
    } else {
      dataBase[town] = population;
    }
  }
  for (let element in dataBase) {
    console.log(`${element} : ${dataBase[element]}`);
  }
}

townPopulation([
  'Sofia <-> 1200000',

  'Montana <-> 20000',

  'New York <-> 10000000',

  'Washington <-> 2345000',

  'Las Vegas <-> 1000000',
]);
townPopulation([
  'Istanbul <-> 100000',

  'Honk Kong <-> 2100004',

  'Jerusalem <-> 2352344',

  'Mexico City <-> 23401925',

  'Istanbul <-> 1000',
]);
