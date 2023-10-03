function focused() {
  let divChildren = document.querySelectorAll('div input');
  let divChildrenArr = Array.from(divChildren);

  function onFocus(e) {
    e.currentTarget.parentElement.classList.add('focused');
    console.log(e.currentTarget.textContent);
  }

  function onBlur(e) {
    e.currentTarget.parentElement.classList.remove('focused');
  }

  for (let div of divChildrenArr) {
    div.addEventListener('focus', onFocus);
  }
  for (let div of divChildrenArr) {
    div.addEventListener('blur', onBlur);
  }
  console.log(divChildren);
}
