// Task 2 - Collect List Items

function extractText() {
  let listItmes = document.getElementById('items');
  let resultBox = document.getElementById('result');
  resultBox.textContent = listItmes.textContent;
  console.log(listItmes);
}
