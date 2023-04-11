// Zadacha 3 - World Snooker Championship

function Demo(input) {
  let tournamentStage = input[0];
  let ticketType = input[1];
  let numerOfTickets = Number(input[2]);
  let trofeyPicture = input[3];

  let discount = 0;
  let picturePrice = 0;
  let ticketPrice = 0;

  if (tournamentStage === 'Quarter final') {
    switch (ticketType) {
      case 'Standard':
        ticketPrice = 55.5;
        break;
      case 'Premium':
        ticketPrice = 105.2;
        break;
      case 'VIP':
        ticketPrice = 118.9;
        break;
    }
  } else if (tournamentStage === 'Semi final') {
    switch (ticketType) {
      case 'Standard':
        ticketPrice = 75.88;
        break;
      case 'Premium':
        ticketPrice = 125.22;
        break;
      case 'VIP':
        ticketPrice = 300.4;
        break;
    }
  } else if (tournamentStage === 'Final') {
    switch (ticketType) {
      case 'Standard':
        ticketPrice = 110.1;
        break;
      case 'Premium':
        ticketPrice = 160.66;
        break;
      case 'VIP':
        ticketPrice = 400;
        break;
    }
  }

  let subTotal = ticketPrice * numerOfTickets;

  if (trofeyPicture === 'Y') {
    picturePrice = 40;
  }

  if (subTotal > 4000) {
    discount = 0.25;
    picturePrice = 0;
  } else if (subTotal <= 4000 && subTotal > 2500) {
    discount = 0.1;
  }

  let totalPrice = subTotal - subTotal * discount + picturePrice * numerOfTickets;

  console.log(totalPrice.toFixed(2));
}

Demo(['Final', 'Premium', '25', 'Y']);
Demo(['Semi final', 'VIP', '9', 'Y']);
Demo(['Quarter final', 'Standard', '11', 'N']);
