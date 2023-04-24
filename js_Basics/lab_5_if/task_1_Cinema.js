// Task 1 - Cinema

function Demo(input) {
  let eventTpye = input[0];
  let row = Number(input[1]);
  let columns = Number(input[2]);

  let numerOfSeats = row * columns;
  let ticketPrice = 0;

  switch (eventTpye) {
    case 'Premiere':
      ticketPrice = 12;
      break;
    case 'Normal':
      ticketPrice = 7.5;
      break;
    case 'Discount':
      ticketPrice = 5;
      break;
  }
  let totalRevenu = (numerOfSeats * ticketPrice).toFixed(2);
  console.log(`${totalRevenu} leva`);
}

Demo(['Premiere', '10', '12']);
Demo(['Normal', '21', '13']);
Demo(['Discount', '12', '30']);
