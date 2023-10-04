// Task 2 - Last K Numbers Sequence

function somthing(n, k) {
  let resultArr = [1];
  let inputValue = resultArr[0];

  for (let i = 1; i <= n; i++) {
    let currentIndex = i;
    for (let a = k; a > 0; a--) {
      currentIndex--;
      if (currentIndex <= 0) {
        break;
      }
      inputValue += resultArr[currentIndex];
    }
    resultArr.push(inputValue);
    inputValue = 0;
  }
  resultArr.shift();   // bullshit - needs repair
  return resultArr;
}

somthing(6, 3);
somthing(8, 2);
