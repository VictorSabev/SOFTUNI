// Zadacha 2 - Kovertor ot gradusi v radiani

function Demo(input) {
  let radiani = Number(input[0]);
  let gradusi = radiani * 180 / Math.PI;

  console.log(gradusi);
}

Demo('3.1416');
Demo('6.2832');