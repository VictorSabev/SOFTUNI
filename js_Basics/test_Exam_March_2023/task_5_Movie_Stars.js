// Task 5 - Movie Stars

function Demo(input) {
  let index = 0;
  let budget = Number(input[index]);
  index++;
  let command = input[index];
  index++;
  let payment;

  while (command !== 'ACTION') {
    let actorName = command;

    if (actorName.length > 15) {
      payment = 0.2 * budget;
      budget -= payment;
    } else {
      payment = input[index];
      index++;
      budget -= payment;
    }

    if (budget <= 0) {
      break;
    }

    command = input[index];
    index++;
  }

  if (budget >= 0) {
    console.log(`We are left with ${budget.toFixed(2)} leva.`);
  } else {
    console.log(`We need ${Math.abs(budget).toFixed(2)} leva for our actors.`);
  }
}

Demo(['90000', 'Christian Bale', '70000.50', 'Leonard DiCaprio', 'Kevin Spacey', '24000.99']);
Demo(['170000', 'Ben Affleck', '40000.50', 'Zahari Baharov', '80000', 'Tom Hanks', '2000.99', 'ACTION']);
