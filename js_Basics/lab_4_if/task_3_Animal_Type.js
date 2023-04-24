// Task 3 - Animal Type

function Demo(input) {
  let animal = input[0];

  switch (animal) {
    case 'dog':
      console.log('mammal');
      break;
    case 'crocodile':
    case 'tortoise':
    case 'snake':
      console.log('reptile');
      break;
    default:
      console.log('unknown');
      break;
  }
}

Demo(['dog']);
Demo(['snake']);
Demo(['cat']);
