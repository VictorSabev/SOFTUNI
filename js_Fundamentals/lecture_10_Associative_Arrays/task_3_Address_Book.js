// Task 3 - Address Book

function sortAddressBook(input) {
  let addressBook = {};

  for (const entry of input) {
    let [person, address] = entry.split(':');
    addressBook[person] = address;
  }

  let sortedAddressBook = Object.entries(addressBook);
  sortedAddressBook.sort((a, b) => a[0].localeCompare(b[0]));

  for (let i of sortedAddressBook) {
    let currentObj = i;
    console.log(`${currentObj[0]} -> ${currentObj[1]}`);
  }
}

sortAddressBook([
  'Tim:Doe Crossing',

  'Bill:Nelson Place',

  'Peter:Carlyle Ave',

  'Bill:Ornery Rd',
]);

console.log('----------');

sortAddressBook([
  'Bob:Huxley Rd',

  'John:Milwaukee Crossing',

  'Peter:Fordem Ave',

  'Bob:Redwing Ave',

  'George:Mesta Crossing',

  'Ted:Gateway Way',

  'Bill:Gateway Way',

  'John:Grover Rd',

  'Peter:Huxley Rd',

  'Jeff:Gateway Way',

  'Jeff:Huxley Rd',
]);
