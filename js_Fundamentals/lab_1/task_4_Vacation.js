// Task 4 - Vacation

function vacationPrice(group, groupType, weekDay) {
  let roomPrice = 0;
  let discount = 0;
  let specialDiscount = 0;

  if (groupType === 'Students') {
    switch (weekDay) {
      case 'Friday':
        roomPrice = 8.45;
        break;
      case 'Saturday':
        roomPrice = 9.8;
        break;
      case 'Sunday':
        roomPrice = 10.46;
        break;
    }
  } else if (groupType === 'Business') {
    switch (weekDay) {
      case 'Friday':
        roomPrice = 10.9;
        break;
      case 'Saturday':
        roomPrice = 15.6;
        break;
      case 'Sunday':
        roomPrice = 16;
        break;
    }
  } else if (groupType === 'Regular') {
    switch (weekDay) {
      case 'Friday':
        roomPrice = 15;
        break;
      case 'Saturday':
        roomPrice = 20;
        break;
      case 'Sunday':
        roomPrice = 22.5;
        break;
    }
  }

  if (groupType === 'Students' && group >= 30) {
    discount = 0.15;
  } else if (groupType === 'Business' && group >= 100) {
    specialDiscount = 10;
  } else if (groupType === 'Regular' && group >= 10 && group <= 20) {
    discount = 0.05;
  }

  let subTotal = (group - specialDiscount) * roomPrice;
  let totalCost = subTotal - subTotal * discount;

  console.log(`Total price: ${totalCost.toFixed(2)}`);
}

vacationPrice(30, 'Students', 'Sunday');
vacationPrice(40, 'Regular', 'Saturday');
