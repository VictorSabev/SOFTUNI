// Task 1 -

function Demo(input) {
  let groupMembers = Number(input[0]);
  let numberOfStays = Number(input[1]);
  let numberOfTransportCards = Number(input[2]);
  let numberOfMuseumTickets = Number(input[3]);

  let stayPrice = 20;
  let transportCardPrice = 1.6;
  let museumTicketPrice = 6;

  let additionalCost = 1.25;

  let subTotal = (numberOfStays * stayPrice + numberOfMuseumTickets * museumTicketPrice + numberOfTransportCards * transportCardPrice) * groupMembers;
  let totalCost = subTotal * additionalCost;

  console.log(totalCost.toFixed(2));
}

Demo(['20', '14', '30', '6']);
Demo(['131', '9', '33', '46']);
