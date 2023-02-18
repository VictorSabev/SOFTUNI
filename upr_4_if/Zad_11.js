// Zadacha 11 - Fruit Shop

function Demo(input) {
  let fruit = input[0];
  let day = input[1];
  let quantity = Number(input[2]);

  if ((day === 'Monday' || day === 'Tuesday' || day === '' || day === 'Wednesday' || day === 'Thursday' || day === 'friday') && fruit === 'banana') {
    console.log((quantity * 2.5).toFixed(2));
  } else if ((day === 'Monday' || day === 'Tuesday' || day === '' || day === 'Wednesday' || day === 'Thursday' || day === 'Friday') && fruit === 'apple') {
    console.log((quantity * 1.2).toFixed(2));
  } else if ((day === 'Monday' || day === 'Tuesday' || day === '' || day === 'Wednesday' || day === 'Thursday' || day === 'Friday') && fruit === 'orange') {
    console.log((quantity * 0.85).toFixed(2));
  } else if ((day === 'Monday' || day === 'Tuesday' || day === '' || day === 'Wednesday' || day === 'Thursday' || day === 'Friday') && fruit === 'grapefruit') {
    console.log((quantity * 1.45).toFixed(2));
  } else if ((day === 'Monday' || day === 'Tuesday' || day === '' || day === 'Wednesday' || day === 'Thursday' || day === 'Friday') && fruit === 'kiwi') {
    console.log((quantity * 2.70).toFixed(2));
  } else if ((day === 'Monday' || day === 'Tuesday' || day === '' || day === 'Wednesday' || day === 'Thursday' || day === 'Friday') && fruit === 'pineapple') {
    console.log((quantity * 5.50).toFixed(2));
  } else if ((day === 'Monday' || day === 'Tuesday' || day === '' || day === 'Wednesday' || day === 'Thursday' || day === 'Friday') && fruit === 'grapes') {
    console.log((quantity * 3.85).toFixed(2));
  } else if ((day === 'Saturday' || day === 'Sunday')  && fruit === 'banana') {
    console.log((quantity * 2.70).toFixed(2));
  } else if ((day === 'Saturday' || day === 'Sunday')  && fruit === 'apple') {
    console.log((quantity * 1.25).toFixed(2));
  } else if ((day === 'Saturday' || day === 'Sunday')  && fruit === 'orange') {
    console.log((quantity * 0.90).toFixed(2));
  } else if ((day === 'Saturday' || day === 'Sunday')  && fruit === 'grapefruit') {
    console.log((quantity * 1.60).toFixed(2));
  } else if ((day === 'Saturday' || day === 'Sunday')  && fruit === 'kiwi') {
    console.log((quantity * 3).toFixed(2));
  } else if ((day === 'Saturday' || day === 'Sunday')  && fruit === 'pineapple') {
    console.log((quantity * 5.60).toFixed(2));
  } else if ((day === 'Saturday' || day === 'Sunday')  && fruit === 'grapes') {
    console.log((quantity * 4.20).toFixed(2));
  } else {
    console.log('error');
  }

}

Demo(['apple', 'Tuesday', '2']);
Demo(['orange', 'Sunday', '3']);
Demo(['kiwi', 'Monday', '2.5']);
Demo(['grapes', 'Saturday', '0.5']);
Demo(['tomato', 'Monday', '0.5']);
