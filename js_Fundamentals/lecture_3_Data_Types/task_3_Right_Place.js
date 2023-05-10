// Task 3 - Right Place

function placer(firstString, character, secondString) {
  let newFirstString = firstString.replace('_', character);

  if (newFirstString === secondString) {
    console.log('Matched');
  } else {
    console.log('Not Matched');
  }
}

placer('Str_ng', 'I', 'Strong');
placer('Str_ng', 'i', 'String');
