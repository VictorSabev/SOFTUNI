function solve() {
  let inputText = document.getElementById('text').value;
  let convention = document.getElementById('naming-convention').value;

  let result = '';
  let testArr = inputText.split(' ');

  if (convention === 'Camel Case') {
    result = testArr.shift().toLowerCase();

    for (let word of testArr) {
      let firstLetter = word[0].toUpperCase();
      word = word.substring(1).toLowerCase();
      let resultWord = firstLetter + word;

      result += resultWord;
    }
  } else if (convention === 'Pascal Case') {
    for (let word of testArr) {
      let firstLetter = word[0].toUpperCase();
      word = word.substring(1).toLowerCase();
      let resultWord = firstLetter + word;

      result += resultWord;
    }
  } else {
    result = 'Error!';
  }
  console.log(result);
  let resultContainer = document.getElementById('result');

  resultContainer.textContent = result;
}
