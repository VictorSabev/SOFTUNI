// Task 6 - Smallest Two Numbers

function smallestTwoNumbers(input) {
  let sortedAscending = input.sort((a, b) => a - b);
  let smallestTwoNumbers = sortedAscending.filter((x, i) => i < 2);
  console.log(smallestTwoNumbers.join(' '));
}




smallestTwoNumbers([30, 15, 50, 5]);
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);
