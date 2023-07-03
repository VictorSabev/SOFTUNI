// Task 6 - Make a Dictionary

function dictionary(input) {
  let newObject = {};
  for (const i of input) {
    let command = JSON.parse(i); // convert (parse) every elelemnt of the input array from JSON fromat into an object) the command var. contatins object of objects

    for (const i in command) {
      newObject[i] = command[i];
    }
  }

  const storedKeys = Object.keys(newObject).sort(); // create an array containing only the keys of the object and sort them

  for (const a of storedKeys) {
    // print the result
    console.log(`Term: ${a} => Definition: ${newObject[a]}`);
  }
}

dictionary([
  '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
  '{"Bus":"A large motor vehicle carrying passengers by road,typically one serving the public on a fixed route and for a fare."}',
  '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
  '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
  '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
]);

console.log('------------');

dictionary([
  '{"Cup":"A small bowl-shaped container for drinking from, typically having a handle"}',
  '{"Cake":"An item of soft sweet food made from a mixture of flour, fat, eggs, sugar, and other ingredients, baked and sometimes iced or decorated."} ',
  '{"Watermelon":"The large fruit  of a plant of the gourd family, with smooth green skin, red pulp, and watery juice."} ',
  '{"Music":"Vocal or instrumental sounds (or both) combined in such a way as to produce beauty of form, harmony, and expression of emotion."} ',
  '{"Art":"The expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture, producing works to be appreciated primarily for their beauty or emotional power."}',
]);
