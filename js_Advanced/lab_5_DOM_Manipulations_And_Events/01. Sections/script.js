function create(words) {
  let resultDiv = document.getElementById('content');

  for (let currentString of words) {
    let currentDivElement = document.createElement('div');
    let currentParagraph = document.createElement('p');

    currentDivElement.appendChild(currentParagraph);
    currentParagraph.textContent = currentString;
    currentParagraph.style.display = 'none';

    currentDivElement.addEventListener('click', () => {
      currentParagraph.style.display = 'block ';
    });

    resultDiv.appendChild(currentDivElement);
  }
}
