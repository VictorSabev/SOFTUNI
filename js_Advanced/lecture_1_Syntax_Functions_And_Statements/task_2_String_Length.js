// Task 2 - String Length

function stringLength(string1, string2, string3) {
  const stringsSum = string1 + string2 + string3;
  const totalSum = stringsSum.length;

  const avgLength = Math.round(totalSum / 3);

  console.log(totalSum);
  console.log(avgLength);
}

stringLength('chocolate', 'ice cream', 'cake');
stringLength('pasta', '5', '22.3');
