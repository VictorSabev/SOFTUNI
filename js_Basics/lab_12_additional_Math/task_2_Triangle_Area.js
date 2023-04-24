// Task 2 - Triangle Area

function Demo(input) {
  let index = 0;
  let a = Number(input[index]);
  index++;
  let ha = Number(input[index]);
  index++;
  let S = (a * ha) / 2;
  console.log(S.toFixed(2));
}

Demo(['20', '30']);
Demo(['15', '35']);
Demo(['7.75', '8.45']);
Demo(['1.23456', '4.56789']);
