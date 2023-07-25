// Task 2 - Match Phone Number

function matchPgoneNumber(numbers) {
  let pattern = /\+359([ -])2\1\d{3}\1\d{4}\b/g;
  let text = numbers.shift();
  let validNumbers = text.match(pattern);
  console.log(validNumbers.join(', '));
}

matchPgoneNumber([
  '+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222',
]);
matchPgoneNumber([
  '+359 2 357 3351 +359 2 22 2222 +359 2 173 3408 +359-2-789-2584 +359 2 193 3953 +359-2-961-0248 +359-2-789-2584 +359 2 222 222 +360 2 222 2222 +359 2 727 9740 +359-2-854-2280 +359 2 193 3953 +359 2 357 3351 +359 2 558 8560 +359 2 222 222',
]);
