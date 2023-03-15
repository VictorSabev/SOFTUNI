// Zadacha 5 - Average Number

function Demo(input) {
  let index = 0;
  let n = Number(input[index]);
  index++;
  let m = Number(input[index]);
  index++;
  let testInmput = [];
  let count = 0;

  while (testInmput.length < n) {
    count += m;

    testInmput.push(1);
    m = Number(input[index]);
    index++;
  }

  console.log((count / n).toFixed(2));
}

Demo(['4', '3', '2', '4', '2']);
Demo(['2', '6', '4']);
Demo(['3', '82', '43', '22']);
Demo(['4', '95', '23', '76', '23']);
