function lockedProfile() {
  let profileDivs = document.querySelectorAll('.profile');

  let idCounter = 0;
  for (let div of profileDivs) {
    idCounter++;
    let radioButtons = div.querySelectorAll('input[type="radio"]');
    let lockButton = radioButtons[0];
    let unlockButton = radioButtons[1];
    console.log(lockButton);

    let actioButton = div.querySelector('.profile button');
    let hiddenElement = document.getElementById(`user${idCounter}HiddenFields`);

    actioButton.addEventListener('click', () => {
      if (unlockButton.checked) {
        if (hiddenElement.style.display === 'none') {
          hiddenElement.style.display = 'block';
          actioButton.textContent = 'Hide it';
        } else {
          hiddenElement.style.display = 'none';
          actioButton.textContent = 'Show more';
        }
      }
    });
  }
}
