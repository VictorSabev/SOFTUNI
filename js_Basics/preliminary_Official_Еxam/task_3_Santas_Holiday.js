// Task 3 - Santas Holiday

function Demo(input) {
  let daysOfStay = Number(input[0]);
  let typeOfRoom = input[1];
  let remark = input[2];

  let roomPrice = 18;
  let discount = 0;

  switch (typeOfRoom) {
    case 'apartment':
      roomPrice = 25;
      if (daysOfStay < 10) {
        discount = 0.3;
      } else if (daysOfStay >= 10 && daysOfStay <= 15) {
        discount = 0.35;
      } else if (daysOfStay > 15) {
        discount = 0.5;
      }
      break;

    case 'president apartment':
      roomPrice = 35;
      if (daysOfStay < 10) {
        discount = 0.1;
      } else if (daysOfStay >= 10 && daysOfStay <= 15) {
        discount = 0.15;
      } else if (daysOfStay > 15) {
        discount = 0.2;
      }
      break;
  }

  let subtotal = (roomPrice - roomPrice * discount) * (daysOfStay - 1);

  if (remark === 'positive') {
    subtotal *= 1.25;
  } else if (remark === 'negative') {
    subtotal = subtotal - subtotal * 0.1;
  }

  console.log(subtotal.toFixed(2));
}

Demo(['14', 'apartment', 'positive']);
Demo(['30', 'president apartment', 'negative']);
Demo(['12', 'room for one person', 'positive']);
Demo(['2', 'apartment', 'positive']);
