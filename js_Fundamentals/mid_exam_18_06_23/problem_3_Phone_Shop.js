// Problem 3 - Phone Shop

function phoneShop(input) {
  let phoneInStock = input.shift().split(', ');
  let instructions = input.shift().split(' - ');
  let command = instructions.shift();

  while (command !== 'End') {
    let parameter = instructions.shift();

    switch (command) {
      case 'Add':
        let newPhoneAdd = parameter;
        if (phoneInStock.includes(newPhoneAdd)) {
        } else {
          phoneInStock.push(newPhoneAdd);
        }
        break;
      case 'Remove':
        let reomvedPhone = parameter;
        if (phoneInStock.includes(reomvedPhone)) {
          let removeIndex = phoneInStock.indexOf(reomvedPhone);
          phoneInStock.splice(removeIndex, 1);
        }
        break;
      case 'Bonus phone':
        let bonusInstructions = parameter.split(':');
        let oldPhone = bonusInstructions.shift();
        let newPhone = bonusInstructions.shift();
        if (phoneInStock.includes(oldPhone)) {
          let bonusIndex = phoneInStock.indexOf(oldPhone);
          phoneInStock.splice(bonusIndex + 1, 0, newPhone);
        }
        break;
      case 'Last':
        let trasferdPhone = parameter;
        let trasferdIndex = phoneInStock.indexOf(trasferdPhone);
        if (phoneInStock.includes(trasferdPhone)) {
          let trasportForm = phoneInStock.splice(trasferdIndex, 1);
          phoneInStock.push(trasportForm);
        }
        break;
    }

    instructions = input.shift().split(' - ');
    command = instructions.shift();
  }
  console.log(phoneInStock.join(', '));
}

phoneShop(['SamsungA50, MotorolaG5, IphoneSE', 'Add - Iphone10', 'Remove - IphoneSE', 'End']);
phoneShop(['HuaweiP20, XiaomiNote', 'Remove - Samsung', 'Bonus phone - XiaomiNote:Iphone5', 'End']);
phoneShop(['SamsungA50, MotorolaG5, HuaweiP10', 'Last - SamsungA50', 'Add - MotorolaG5', 'End']);
