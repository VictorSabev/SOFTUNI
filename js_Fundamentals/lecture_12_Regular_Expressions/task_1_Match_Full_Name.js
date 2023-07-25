// Task 1 - Match Full Name

function matchFullName(input) {
  let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
  let matches = input.match(pattern);

  console.log(matches.join(' '));
}

matchFullName(
  'Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan  Ivanov'
);
