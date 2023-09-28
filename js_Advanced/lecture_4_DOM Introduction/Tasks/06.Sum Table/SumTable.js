// Task 6 - Sum Table

function sumTable() {
  let rowElements = document.querySelectorAll('tr td:nth-of-type(2)');
  let rowElementsArr = Array.from(rowElements);
  
  let sum = 0;
  rowElementsArr.forEach((x) => {
    sum += Number(x.textContent);
  });

  let sumElement = document.getElementById('sum');
  sumElement.textContent = sum;
 
}
