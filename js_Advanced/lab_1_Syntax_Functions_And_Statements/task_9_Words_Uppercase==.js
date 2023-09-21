// Task 9 - Words Uppercase

function wordsUppercase(input) {
  let commnad = input.toUpperCase();
  let pattern = /[A-Za-z]+/;

  let result = commnad.match(pattern);

  for (match of result) {
    console.log(match);
  }
}

wordsUppercase('Hi, how are you?');
wordsUppercase('hello');
