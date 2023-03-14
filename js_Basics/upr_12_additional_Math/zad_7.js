// Zadacha 7 - House Painting

function Demo(input) {
  let index = 0;
  let x = Number(input[index]);
  index++;
  let y = Number(input[index]);
  index++;
  let h = Number(input[index]);
  index++;

  let greenOutgo = 3.4;
  let redOutgo = 4.3;

  //GREEN PAINT

  // front of the house
  let frontS = x * x;
  let doorS = 2 * 1.2;
  let finalFrontS = frontS - doorS;
  // back of the house
  let finalBackS = frontS;

  // sides of the house - 2 identiacl windwos on each side
  let sidesS = x * y;
  let windowS = 1.5 ** 2;
  let finalSideS = sidesS - windowS;

  let totalGreenS = finalFrontS + finalBackS + finalSideS * 2;
  let greenLitersPaint = totalGreenS / greenOutgo;

  // RED PAINT

  let roofMainS = sidesS;
  let roofSideS = (x * h) / 2;

  let totalRedS = (roofMainS + roofSideS) * 2;
  let redLitersPaint = totalRedS / redOutgo;

  console.log(greenLitersPaint.toFixed(2));
  console.log(redLitersPaint.toFixed(2));
}

Demo(['6', '10', '5.2']);
Demo(['10.25', '15.45', '8.88']);
