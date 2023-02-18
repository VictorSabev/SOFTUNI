//Zadacha 5

function Demo(input) {
  let product = input[0];
  let city = input[1];
  let quantity = Number(input[2]);

  if (product === 'coffee' && city === 'Sofia') {
    console.log(quantity * 0.5);
  } else if (product === 'coffee' && city === 'Plovdiv') {
    console.log(quantity * 0.4);
  } else if (product === 'coffee' && city === 'Varna') {
    console.log(quantity * 0.45);
  } else if (product === 'water' && city === 'Sofia') {
    console.log(quantity * 0.8);
  } else if (product === 'water' && city === 'Plovdiv') {
    console.log(quantity * 0.7);
  } else if (product === 'water' && city === 'Varna') {
    console.log(quantity * 0.7);
  } else if (product === 'beer' && city === 'Sofia') {
    console.log(quantity * 1.2);
  } else if (product === 'beer' && city === 'Plovdiv') {
    console.log(quantity * 1.15);
  } else if (product === 'beer' && city === 'Varna') {
    console.log(quantity * 1.1);
  } else if (product === 'sweets' && city === 'Sofia') {
    console.log(quantity * 1.45);
  } else if (product === 'sweets' && city === 'Plovdiv') {
    console.log(quantity * 1.3);
  } else if (product === 'sweets' && city === 'Varna') {
    console.log(quantity * 1.35);
  } else if (product === 'peanuts' && city === 'Sofia') {
    console.log(quantity * 1.6);
  } else if (product === 'peanuts' && city === 'Plovdiv') {
    console.log(quantity * 1.5);
  } else if (product === 'peanuts' && city === 'Varna') {
    console.log(quantity * 1.55);
  }

}

Demo(['coffee', 'Varna', '2']);
Demo(['peanuts', 'Plovdiv', '1']);
Demo(['beer', 'Sofia', '2']);
Demo(['water', 'Plovdiv', '2']);
Demo(['sweets', 'Sofia', '2.23']);