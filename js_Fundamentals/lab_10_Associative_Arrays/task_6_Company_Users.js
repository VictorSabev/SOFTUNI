// Task 6 - Company Users

function dataBaseSorting(input) {
  let dataBase = {};

  for (let entry of input) {
    entry = entry.split(' -> ');
    let companyName = entry[0];
    let employeeId = entry[1];
    if (dataBase.hasOwnProperty(companyName)) {
      dataBase[companyName].add(employeeId);
    } else {
      dataBase[companyName] = new Set([employeeId]);
    }
  }

  let sortArray = Object.entries(dataBase);
  sortArray.sort((a, b) => a[0].localeCompare(b[0]));

  for (const [company, iDs] of sortArray) {
    console.log(company);
    let convertSortToArray = Array.from(iDs);
    for (const currentId of convertSortToArray) {
      console.log(`-- ${currentId}`);
    }
  }
}

dataBaseSorting([
  'SoftUni -> AA12345',
  'SoftUni -> BB12345',
  'Microsoft -> CC12345',
  'HP -> BB12345',
]);
dataBaseSorting([
  'SoftUni -> AA12345',
  'SoftUni -> CC12344',
  'Lenovo -> XX23456',
  'SoftUni -> AA12345',
  'Movement -> DD11111',
]);
