// Task 3 - Ani

function demo(input) {
  let pens = Number(input[0]);
  let markers = Number(input[1]);
  let litters = Number(input[2]);
  let discount = Number(input[3]);

  let pensFinalPrice = pens * 5.8;
  let markersFinalPrice = markers * 7.2;
  let littersFinalPrice = litters * 1.2;

  let finalPrice = pensFinalPrice + markersFinalPrice + littersFinalPrice;
  let priceAfterDiscount = finalPrice - (finalPrice * discount) / 100;

  console.log(pensFinalPrice);
  console.log(finalPrice);
  console.log(priceAfterDiscount);
}

demo(['2', '3', '4', '25']);
