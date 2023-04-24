// Task 1 - Number Pyramid

function Demo(input) {
  let n = Number(input[0]);
  let current = 1;
  let isBigger = false;
  let printCurrentLine = '';

  for (let rows = 1; rows <= n; rows++) {
    for (let columns = 1; columns <= n; columns++) {
      if (current > n) {
        isBigger = true;
        break;
      }
      printCurrentLine += current + '';
      current++;
    }
    console.log(printCurrentLine);
    printCurrentLine = '';
    if (isBigger) {
      break;
    }
  }
}
Demo(['7']);
Demo(['12']);
Demo(['15']);
