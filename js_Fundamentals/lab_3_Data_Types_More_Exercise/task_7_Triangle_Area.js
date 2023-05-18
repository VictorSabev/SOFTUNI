// Task 7 - Triangle Area

function triangleArea(a, b, c) {
  const s = (1 / 2) * (a + b + c);
  const A = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  console.log(A);
}

triangleArea(2, 3.5, 4);
triangleArea(3, 5.5, 4);
