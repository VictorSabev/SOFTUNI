function solve() {
  let inputText = document.getElementById('input').value;

  let inputTetArr = inputText.split('.');
  let filteredArr = inputTetArr.filter((x) => x.length > 0);

  let resultArr = [];
  let newParagraph = '';

  for (let i = 0; i < filteredArr.length; i += 3) {
    if (filteredArr[i] !== undefined) {
      newParagraph = `${filteredArr[i]}.`;
    }
    if (filteredArr[i + 1] !== undefined) {
      newParagraph += ` ${filteredArr[i + 1]}.`;
    }
    if (filteredArr[i + 2] !== undefined) {
      newParagraph += ` ${filteredArr[i + 2]}.`;
    }
    resultArr.push(newParagraph);
  }

  let resultDiv = document.getElementById('output');

  for (let paragraph of resultArr) {
    let pElement = document.createElement('p');
    pElement.textContent = paragraph;
    resultDiv.appendChild(pElement);
  }
}

// Test. Stay. Or go. I dont. Know. Anymore.
