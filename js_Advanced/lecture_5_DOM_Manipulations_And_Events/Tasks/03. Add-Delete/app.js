function addItem() {
  let ulElement = document.getElementById('items');
  let textInput = document.getElementById('newItemText').value;

  let newListItem = document.createElement('li');
  newListItem.textContent = textInput;

  ulElement.appendChild(newListItem);

  let deleteButton = document.createElement('a');
  deleteButton.href = '#';
  deleteButton.textContent = '[Delete]';
  newListItem.appendChild(deleteButton);

  deleteButton.addEventListener('click', (e) => {
    e.currentTarget.parentElement.remove();
  });
}
