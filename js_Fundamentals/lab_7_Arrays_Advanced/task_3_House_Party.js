// Task 3 - House Party

function partyPlaning(guestList) {
  let guestListCopy = guestList.slice();
  let newGuestList = [];

  for (let entry of guestListCopy) {
    entry = entry.split('  ');
    let guest = entry[0];

    if (entry.includes('not')) {
      if (!newGuestList.includes(guest)) {
        console.log(`${guest} is not in the list!`);
      } else {
        newGuestList = newGuestList.filter((x) => x !== guest);
      }
    } else if (newGuestList.includes(guest)) {
      console.log(`${guest} is already in the list!`);
    } else {
      newGuestList.push(guest);
    }
  }
  console.log(newGuestList.join('\n'));
}

partyPlaning(['Allie is going!', 'George is going!', 'John is not going!', 'George is not going!']);
partyPlaning(['Tom is going!', 'Annie is going!', 'Tom is going!', 'Garry is going!', 'Jerry is going!']);
