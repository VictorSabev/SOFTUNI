// Task 4 - String Substring

function extracion(word, text) {
  let textArr = text.split(' ');

  for (const element of textArr) {
    if (word.toLowerCase() === element.toLowerCase()) {
      return console.log(word);
    } else {
    }
  }

  console.log(`${word} not found!`);
}

extracion('javascript', 'JavaScript is the best programming language');
extracion('python', 'JavaScript is the best programming language');
