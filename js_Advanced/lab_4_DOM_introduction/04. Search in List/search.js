function search() {
  let searchBoxText = document.getElementById('searchText').value;
  let listItems = document.getElementsByTagName('li');
  let result = document.getElementById('result');
  let matchCount = 0;

  for (let li of listItems) {
    li.style.fontWeight = 'initial';
    li.style.textDecoration = 'initial';
    if (li.textContent.includes(searchBoxText)) {
      li.style.fontWeight = 'bold';
      li.style.textDecoration = 'underline';
      matchCount++;
    }
  }
  result.textContent = `${matchCount} matches found`;
}
