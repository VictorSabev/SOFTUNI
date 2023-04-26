// Task 5 - Distance between Points

function distanceCalculator(x1, y1, x2, y2) {
  let result = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  console.log(result);
}

distanceCalculator(2, 4, 5, 0);
distanceCalculator(2.34, 15.66, -13.55, -2.9985);
