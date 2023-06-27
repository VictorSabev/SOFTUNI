// Task 4 - Convert_Тo_JSON

function convertObject(name1, name2, color) {
  let newObject = { name: name1, lastName: name2, hairColor: color };
  let convertedData = JSON.stringify(newObject);
  console.log(convertedData);
}

convertObject('George', 'Jones', 'Brown');
convertObject('Peter', 'Smith', 'Blond');
