// Task 10 - Triples of Latin Letters

function transformer(input) {
  let num = Number(input);

  let letter = String.fromCharCode(97 + num);
  console.log(letter);
}

transformer('3');
transformer(2);
