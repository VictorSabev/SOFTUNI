// Task 7 - 

function Demo(input) {
  let stadiumCapacity = Number(input[0]);
  let fansNumber = Number(input[1]);

  let sector = '';
  let sectorACount = 0;
  let sectorBCount = 0;
  let sectorVCount = 0;
  let sectorGCount = 0;

  for (let i = 2; i <= fansNumber + 1; i++) {
    sector = input[i];
    if (sector === 'A') {
      sectorACount++;
    } else if (sector === 'B') {
      sectorBCount++;
    } else if (sector === 'V') {
      sectorVCount++;
    } else if (sector === 'G') {
      sectorGCount++;
    }
  }

  let avgSectorA = (sectorACount / fansNumber) * 100;
  let avgSectorB = (sectorBCount / fansNumber) * 100;
  let avgSectorV = (sectorVCount / fansNumber) * 100;
  let avgSectorG = (sectorGCount / fansNumber) * 100;

  let fanProcentage = (fansNumber / stadiumCapacity) * 100;

  console.log(`${avgSectorA.toFixed(2)}%`);
  console.log(`${avgSectorB.toFixed(2)}%`);
  console.log(`${avgSectorV.toFixed(2)}%`);
  console.log(`${avgSectorG.toFixed(2)}%`);
  console.log(`${fanProcentage.toFixed(2)}%`);
}

Demo(['76', '10', 'A', 'V', 'V', 'V', 'G', 'B', 'A', 'V', 'B', 'B']);
console.log('----------------------');
Demo(['93', '16', 'A', 'V', 'G', 'G', 'B', 'B', 'G', 'B', 'A', 'B', 'B', 'B', 'A', 'B', 'B', 'A']);
console.log('----------------------');
Demo(['1000', '12', 'A', 'A', 'V', 'V', 'A', 'G', 'A', 'A', 'V', 'G', 'V', 'A']);
