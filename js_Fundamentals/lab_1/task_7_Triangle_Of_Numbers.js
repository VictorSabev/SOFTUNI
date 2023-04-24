// Task 7 - Triangle Of Numbers

function triangle(num) {
  for (let y = 1; y <= num; y++) {
    let b = '';
    for (let x = 1; x <= y; x++) {
      b += ` ${y}`;
    }
    console.log(String(b));
  }
}

triangle(3);
console.log('--------------');
triangle(5);
console.log('--------------');
triangle(6);
