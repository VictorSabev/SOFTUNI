// Task 5 - Colorize Table

function colorize() {
  let rowElements = document.querySelectorAll('tr:nth-of-type(2n) td');
  rowElements.forEach((x) => (x.style.backgroundColor = 'teal'));

  // let rowElements = document.getElementsByTagName('tr');  // Alternative solution with Arr
  // let rowElementsArr = Array.from(rowElements);
  // rowElementsArr.forEach((x, i) => {
  //   if (i % 2 !== 0) {
  //     x.style.backgroundColor = 'teal';
  //   }
  // });
}
