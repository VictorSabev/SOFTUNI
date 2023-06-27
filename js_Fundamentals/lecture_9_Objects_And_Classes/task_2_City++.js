// Task 2 - City

function objectLoop(inputObject) {
  for (let i of Object.keys(inputObject)) {
    console.log(`${i} -> ${inputObject[i]}`);
  }
}

objectLoop({
  name: 'Sofia',
  area: 492,
  population: 1238438,
  country: 'Bulgaria',
  postCode: '1000',
});
objectLoop({
  name: 'Plovdiv',
  area: 389,
  population: 1162358,
  country: 'Bulgaria',
  postCode: '4000',
});
