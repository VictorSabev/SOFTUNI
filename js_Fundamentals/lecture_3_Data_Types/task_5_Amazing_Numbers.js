// Task 5 - Amazing Numbers

function checkAmazing(num) {
  let convert = String(num);
  let sum = 0;

  for (let i = 0; i < convert.length; i++) {
    sum += Number(convert[i]);
  }

  let result = String(sum).includes('9');

  console.log(result ? `${num} Amazing? True` : `${num} Amazing? False`);
}

checkAmazing(1233);
checkAmazing(999);
