// Task 7 - A Miner Task

function redFaction(input) {
  let result = {};

  for (let i = 0; i < input.length; i = i + 2) {
    let currentResource = input[i];
    let currentQuantity = Number(input[i + 1]);

    if (result.hasOwnProperty(currentResource)) {
      result[currentResource] += Number(currentQuantity);
    } else {
      result[currentResource] = currentQuantity;
    }
  }

  for (const resource in result) {
    console.log(`${resource} -> ${result[resource]}`);
  }
}

redFaction(['Gold', '155', 'Silver', '10', 'Copper', '17']);
redFaction(['gold', '155', 'silver', '10', 'copper', '17', 'gold', '15']);
