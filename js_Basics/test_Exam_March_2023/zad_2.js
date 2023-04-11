// Zdacha 2 - Add Bags

function Demo(input) {
  let luggagePriceHigherthen20 = input[0];
  let luggageWeight = input[1];
  let daysTillTrip = input[2];
  let numberOfBags = input[3];

  let luggagePrice = luggagePriceHigherthen20;

  if (luggageWeight < 10) {
    luggagePrice = 0.2 * luggagePriceHigherthen20;
  } else if (luggageWeight >= 10 && luggageWeight <= 20) {
    luggagePrice = 0.5 * luggagePriceHigherthen20;
  } else if (luggageWeight > 20) {
    luggagePrice = luggagePriceHigherthen20;
  }

  if (daysTillTrip > 30) {
    luggagePrice *= 1.1;
  } else if (daysTillTrip <= 30 && daysTillTrip >= 7) {
    luggagePrice *= 1.15;
  } else if (daysTillTrip < 7) {
    luggagePrice *= 1.4;
  }

  let totalPrice = luggagePrice * numberOfBags;

  console.log(`The total price of bags is: ${totalPrice.toFixed(2)} lv.`);
}

Demo(['30', '18', '15', '2']);
Demo(['25.50', '5', '36', '6']);
Demo(['63.80', '23', '3', '1']);
