// Problem 2 - Shopping List

function shoppingMania(inputArray) {
  let shoppingList = inputArray.shift().split('!');

  for (let i of inputArray) {
    let instructions = i.split(' ');
    let command = instructions.shift();
    let item = instructions.shift();
    let substitudeItem = instructions.shift();

    let index = 0;

    switch (command) {
      case 'Urgent':
        if (shoppingList.includes(item)) {
          break;
        } else {
          shoppingList.unshift(item);
        }
        break;
      case 'Unnecessary':
        if (shoppingList.includes(item)) {
          // shoppingList = shoppingList.filter(x => x !== item);  - alternative method
          index = shoppingList.indexOf(item);
          shoppingList.splice(index, 1);
        }
        break;
      case 'Correct':
        if (shoppingList.includes(item)) {
          index = shoppingList.indexOf(item);
          shoppingList[index] = substitudeItem; //shoppingList.splice(index, 1, substitudeItem);   - alternative method
        }
        break;
      case 'Rearrange':
        if (shoppingList.includes(item)) {
          index = shoppingList.indexOf(item);
          let relocate = shoppingList.splice(index, 1);
          shoppingList.push(relocate);
        }
        break;
      case 'Go Shopping!':
        break;
    }
  }
  console.log(shoppingList.join(', '));
}

shoppingMania(['Tomatoes!Potatoes!Bread', 'Unnecessary Milk', 'Urgent Tomatoes', 'Go Shopping!']);
shoppingMania(['Milk!Pepper!Salt!Water!Banana', 'Urgent Salt', 'Unnecessary Grapes', 'Correct Pepper Onion', 'Rearrange Grapes', 'Correct Tomatoes Potatoes', 'Go Shopping!']);
