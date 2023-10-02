function solve() {
  document.querySelector('#searchBtn').addEventListener('click', onClick);

  function onClick() {
    let table = document.querySelectorAll('tr');
    let tableElementsArr = Array.from(table);
    tableElementsArr.shift();

    let searchInput = document.getElementById('searchField').value;

    for (let td of tableElementsArr) {
      td.classList.remove('select'); // removes class - substitute the fowloing styles:
      // td.style.backgroundColor = 'initial';
      // td.style.color = 'initial';
      // td.style.fontWeight = 'initial';
      // td.style.boxShadow = 'initial';
      // td.style.transform = 'initial';

      if (td.textContent.includes(searchInput)) {
        td.classList.add('select'); // adds class - substitute the fowloing styles:
        //   td.style.backgroundColor = '#FFF842';
        //   td.style.color = '#403E10';
        //   td.style.fontWeight = 'bold';
        //   td.style.boxShadow =
        //     '#7F7C21 -1px 1px, #7F7C21 -2px 2px, #7F7C21 -3px 3px, #7F7C21 -4px 4px, #7F7C21 -5px 5px, #7F7C21 -6px 6px';
        //   td.style.transform = 'translate3d(6px, -6px, 0)';
      }
    }
  }
}
