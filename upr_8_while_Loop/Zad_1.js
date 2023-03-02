// Zadacha - 01. Read Text

function Demo(input) {
  let index = 0;
  let word = input[index];

  while (word !== 'Stop') {
    console.log(word);
    index++;
    word = input[index];
  }
}

Demo([
  'Nakov',
  'SoftUni',
  'Sofia',
  'Bulgaria',
  'SomeText',
  'Stop',
  'AfterStop',
  'Europe',
  'HelloWorld',
]);

console.log('--------------------------');

Demo([
  'Sofia',
  'Berlin',
  'Moscow',
  'Athens',
  'Madrid',
  'London',
  'Paris',
  'Stop',
  'AfterStop',
]);
