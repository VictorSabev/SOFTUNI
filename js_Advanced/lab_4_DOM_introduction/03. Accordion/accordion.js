function toggle() {
  let button = document.querySelector('span.button');
  let extra = document.querySelector('#extra');

  if (button.textContent === 'Less') {
    button.textContent = 'More';
    extra.style.display = 'none';
  } else {
    button.textContent = 'Less';
    extra.style.display = 'block';
  }
}
