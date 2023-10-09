// Task 2 - Argument Info

function solve(...args) {
  let dataBase = {};
  let counts = {};

  for (let i = 0; i < args.length; i++) {
    let currentKey = typeof args[i];
    dataBase[currentKey] = args[i];

    if (!counts[currentKey]) {
      counts[currentKey] = 0;
    }
    counts[currentKey]++;
  }

  for (const key in dataBase) {
    console.log(`${key}: ${dataBase[key]}`);
  }

  let sortedCounts = Object.entries(counts).sort((a, b) => b[1] - a[1]);

  for (const array of sortedCounts) {
    console.log(`${array[0]} = ${array[1]}`);
  }
}

solve('cat', 42, 31, 'set', 'j', function () {
  console.log('Hello world!');
});
