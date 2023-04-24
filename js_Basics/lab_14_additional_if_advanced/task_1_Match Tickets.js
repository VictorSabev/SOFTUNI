// Task 1 - Match Tickets

function Demo(input) {
  let index = 0;
  let budget = Number(input[index]);
  index++;
  let ticketCategory = input[index];
  index++;
  let groupMmebers = Number(input[index]);
  index++;

  let transportCosts = 0;
  let ticketPrice = 0;

  if (groupMmebers >= 1 && groupMmebers <= 4) {
    transportCosts = 0.75 * budget;
  } else if (groupMmebers >= 5 && groupMmebers <= 9) {
    transportCosts = 0.6 * budget;
  } else if (groupMmebers >= 10 && groupMmebers <= 24) {
    transportCosts = 0.5 * budget;
  } else if (groupMmebers >= 25 && groupMmebers <= 49) {
    transportCosts = 0.4 * budget;
  } else if (groupMmebers >= 50) {
    transportCosts = 0.25 * budget;
  }

  switch (ticketCategory) {
    case 'Normal':
      ticketPrice = 249.99;
      break;
    case 'VIP':
      ticketPrice = 499.99;
      break;
  }

  let totalTicketsPrice = ticketPrice * groupMmebers;
  let totalExpences = totalTicketsPrice + transportCosts;
  let diference = Math.abs(totalExpences - budget).toFixed(2);

  if (totalExpences <= budget) {
    console.log(`Yes! You have ${diference} leva left.`);
  } else {
    console.log(`Not enough money! You need ${diference} leva.`);
  }
}

Demo(['1000', 'Normal', '1']);
Demo(['30000', 'VIP', '49']);
