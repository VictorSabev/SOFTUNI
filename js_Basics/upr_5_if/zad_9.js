// Zadacha 9 - Ski Trip

function Demo(input) {
  let daysOfStay = Number(input[0]);
  let typeOfRoom = input[1];
  let rating = input[2];

  let nightsOfStay = daysOfStay - 1;
  let pricePerNight = 0;
  let discount = 0;
  let additionalDiscount = 0;
  let overprice = 0;

  switch (typeOfRoom) {
    case 'room for one person':
      pricePerNight = 18;
      break;
    case 'apartment':
      pricePerNight = 25;
      break;
    case 'president apartment':
      pricePerNight = 35;
      break;
  }

  switch (rating) {
    case 'positive':
      overprice = 0.25;
      break;
    case 'negative':
      additionalDiscount = 0.1;
      break;
  }

  if (typeOfRoom === 'apartment' && daysOfStay < 10) {
    discount = 0.3;
  } else if (
    typeOfRoom === 'apartment' &&
    daysOfStay >= 10 &&
    daysOfStay <= 15
  ) {
    discount = 0.35;
  } else if (typeOfRoom === 'apartment' && daysOfStay > 15) {
    discount = 0.5;
  } else if (typeOfRoom === 'president apartment' && daysOfStay < 10) {
    discount = 0.1;
  } else if (
    typeOfRoom === 'president apartment' &&
    daysOfStay >= 10 &&
    daysOfStay <= 15
  ) {
    discount = 0.15;
  } else if (typeOfRoom === 'president apartment' && daysOfStay > 15) {
    discount = 0.2;
  }

  let subTotal = (pricePerNight - pricePerNight * discount) * nightsOfStay;
  let totalPrice = (
    subTotal -
    subTotal * additionalDiscount +
    subTotal * overprice
  ).toFixed(2);

  console.log(totalPrice);
}

Demo(['14', 'apartment', 'positive']);
Demo(['30', 'president apartment', 'negative']);
Demo(['12', 'room for one person', 'positive']);
Demo(['2', 'apartment', 'positive']);
