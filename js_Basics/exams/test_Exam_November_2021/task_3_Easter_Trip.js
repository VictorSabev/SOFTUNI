// Task 3 - Easter Trip

function Demo(input) {
  let destination = input[0];
  let reservationDates = input[1];
  let numberOFStays = Number(input[2]);

  let price = 0;

  if (destination === 'France') {
    switch (reservationDates) {
      case '21-23':
        price = 30;
        break;
      case '24-27':
        price = 35;
        break;
      case '28-31':
        price = 40;
        break;
    }
  } else if (destination === 'Italy') {
    switch (reservationDates) {
      case '21-23':
        price = 28;
        break;
      case '24-27':
        price = 32;
        break;
      case '28-31':
        price = 39;
        break;
    }
  } else if (destination === 'Germany') {
    switch (reservationDates) {
      case '21-23':
        price = 32;
        break;
      case '24-27':
        price = 37;
        break;
      case '28-31':
        price = 43;
        break;
    }
  }

  let totalPrice = numberOFStays * price;

  console.log(`Easter trip to ${destination} : ${totalPrice.toFixed(2)} leva.`);
}

Demo(['Germany', '24-27', '5']);
Demo(['Italy', '21-23', '7']);
Demo(['France', '28-31', '8']);
