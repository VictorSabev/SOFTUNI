// Task 2 - Concatenate Names

function nameCocrationator(firstName, secondName, delimiter) {
  let result = firstName + delimiter + secondName;
  console.log(result);
  // console.log(`${firstName}${delimiter}${secondName}`);
}

nameCocrationator('John', 'Smith', '->');
nameCocrationator('Jan', 'White', '<->');
nameCocrationator('Linda', 'Terry', '=>');
