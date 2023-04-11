// Zadacha 7 - Area of Figures

function Demo(input) {
  let figureType = input[0];
  
  if (figureType === 'square') {
    let a = input[1];
    let squareArea = (a*a).toFixed(3);
    console.log(squareArea); 
  } else if (figureType === 'rectangle') { 
    let a = input[1];
    let b = input[2];
    let squareArea = (a*b).toFixed(3);
    console.log(squareArea); 
  } else if (figureType === 'circle') {
    let r = input[1];
    let squareArea = (Math.PI * r ** 2).toFixed(3);
    console.log(squareArea);
  } else if (figureType === 'triangle') {
    let a = input[1];
    let ha = input[2];
    let squareArea = ((a * ha) / 2).toFixed(3);
    console.log(squareArea);
  }
}

Demo(['square', '5']);
Demo(['rectangle', '7', '2.5']);
Demo(['circle', '6']);
Demo(['triangle', '4.5', '20']);