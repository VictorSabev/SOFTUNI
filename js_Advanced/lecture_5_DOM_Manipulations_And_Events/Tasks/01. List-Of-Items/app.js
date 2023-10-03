function addItem() {
  let newListItem = document.createElement('li');
  let textInput = document.getElementById('newItemText').value;
  newListItem.textContent = textInput;

  let ulElement = document.getElementById('items');
  ulElement.appendChild(newListItem);
}
