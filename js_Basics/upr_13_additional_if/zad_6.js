// Zadacha 6 - Flower Shop

function Demo(input) {
  let index = 0;
  let magnolqiNumber = Number(input[index]);
  index++;
  let ziumbiulNumber = Number(input[index]);
  index++;
  let rossesNumber = Number(input[index]);
  index++;
  let cactusNumber = Number(input[index]);
  index++;
  let giftPrice = Number(input[index]);
  index++;

  let revenu = magnolqiNumber * 3.25 + ziumbiulNumber * 4 + rossesNumber * 3.5 + cactusNumber * 8;
  let taxes = 0.05;

  let profit = revenu - revenu * taxes;
  let difference = Math.abs(profit - giftPrice);

  if (profit >= giftPrice) {
    console.log(`She is left with ${Math.floor(difference)} leva.`);
  } else {
    console.log(`She will have to borrow ${Math.ceil(difference)} leva.`);
  }
}

Demo([`2`, `3`, '5', '1', '50']);
Demo(['15', '7', '5', '10', '100']);
