// Task 8 - Point on Rectangle Border

function Demo(input) {
  let index = 0;
  let x1 = Number(input[index]);
  index++;
  let y1 = Number(input[index]);
  index++;
  let x2 = Number(input[index]);
  index++;
  let y2 = Number(input[index]);
  index++;
  let x = Number(input[index]);
  index++;
  let y = Number(input[index]);
  index++;

  if ((x === x1 || x === x2) && y >= y1 && y <= y2) {
    console.log('Border');
  } else if ((y === y1 || y === y2) && x >= x1 && x <= x2) {
    console.log('Border');
  } else {
    console.log('Inside / Outside');
  }
}

Demo(['2', '-3', '12', '3', '8', '-1']);
console.log('------------');
Demo(['2', '-3', '12', '3', '12', '-1']);
