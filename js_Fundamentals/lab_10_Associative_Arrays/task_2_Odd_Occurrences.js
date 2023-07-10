// Task 2 - Odd Occurrences

function oddOccurrences(input) {
  let newArray = input.split(' ');
  let lowerStringArray = newArray.map((x) => x.toLowerCase());

  let result = {};

  for (let entry of lowerStringArray) {
    if (result.hasOwnProperty(entry)) {
      result[entry]++;
    } else {
      result[entry] = 1;
    }
  }

  let arrayObj = Object.entries(result);
  arrayObj.sort((a, b) => b[1] - a[1]); // sorting by nuber of occurrences - descending

  let resultArray = [];

  for (let [word, count] of arrayObj) {
    if (count % 2 !== 0) {
      resultArray.push(word);
    }
  }
  console.log(resultArray.join(' '));
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
console.log('---------');
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');
