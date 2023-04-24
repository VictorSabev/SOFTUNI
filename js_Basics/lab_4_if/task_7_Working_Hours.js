// Task 7 - Working Hours

function Demo(input) {
  let hour = Number(input[0]);
  let day = input[1];

  if (hour >= 10 && hour < 18 && (day === 'Monday' || 'Tuesday' || 'Wednesday' || 'Thursday' || 'Friday')) {
    console.log('open');
  } else if (hour < 10 || hour >= 18 || day === 'Saturday' || 'Sunday') {
    console.log('closed');
  }
}

Demo(['11', 'Monday']);
Demo(['19', 'Friday']);
Demo(['11', 'Sunday']);
