// Task 9 - Gladiator Inventory

function gladiatorInventory(inputArray) {
  let inventory = inputArray.shift().split(' '); // asaigning the first element to a new array
  for (let i of inputArray) {
    let instructions = i.split(' ');
    let command = instructions[0];
    let item = instructions[1];
    let itemIndex = inventory.indexOf(item);

    switch (command) {
      case 'Buy':
        if (!inventory.includes(item)) {
          inventory.push(item);
        }
        break;
      case 'Trash':
        if (inventory.includes(item)) {
          inventory.splice(itemIndex, 1);
        }
        break;
      case 'Repair':
        if (inventory.includes(item)) {
          let repairedItem = inventory.splice(itemIndex, 1);
          inventory.push(repairedItem.join(''));
        }
        break;
      case 'Upgrade':
        let upgradeNature = item.split('-');
        item = upgradeNature[0];
        let material = upgradeNature[1];
        if (inventory.includes(item)) {
          itemIndex = inventory.indexOf(item);
          inventory.splice(itemIndex + 1, 0, `${item}:${material}`);
        }
        break;
    }
  }
  console.log(inventory.join(' '));
}

gladiatorInventory(['SWORD Shield Spear', 'Buy Bag', 'Trash Shield', 'Repair Spear', 'Upgrade SWORD-Steel']);
gladiatorInventory(['SWORD Shield Spear', 'Trash Bow', 'Repair Shield', 'Upgrade Helmet-V']);
