// Task 4 - Circle Area

function circleArea(input) {
  let radius = 0;
  const varType = typeof input;

  if (varType !== 'number') {
    console.log(
      `We can not calculate the circle area, because we receive a ${varType}.`
    );
    return;
  } else {
    radius = input;
    let result = Math.pow(input, 2) * Math.PI;
    console.log(result.toFixed(2));
  }
}

circleArea(5);
circleArea('name');
