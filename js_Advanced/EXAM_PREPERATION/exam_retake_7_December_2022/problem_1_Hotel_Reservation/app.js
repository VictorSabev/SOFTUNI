window.addEventListener('load', solve);

function solve() {
  const firstNameInputElement = document.getElementById('first-name');
  const lastNameInputElement = document.getElementById('last-name');
  const checkInInputElement = document.getElementById('date-in');
  const checkOutInputElement = document.getElementById('date-out');
  const guestsInputElement = document.getElementById('people-count');

  const nextButoon = document.getElementById('next-btn');

  const h1Element = document.getElementById('verification');

  let ulInfoElement = document.querySelector('.info-list');
  let ulConfirmElement = document.querySelector('.confirm-list');

  nextButoon.addEventListener('click', (e) => {
    e.preventDefault();
    let firstName = firstNameInputElement.value;
    let lastName = lastNameInputElement.value;
    let checkIn = checkInInputElement.value;
    let checkOut = checkOutInputElement.value;
    let guests = guestsInputElement.value;

    if (
      firstName === '' ||
      lastName === '' ||
      guests === '' ||
      checkIn ==='' ||
      checkOut === '' ||
      new Date(checkIn) > new Date(checkOut) ||
      guests < 1
    ) {
      return;
    }

    let namesH3lement = document.createElement('h3');
    let checkInPElement = document.createElement('p');
    let checkOutPElement = document.createElement('p');
    let guestsPElement = document.createElement('p');

    namesH3lement.textContent = `Name: ${firstName} ${lastName}`;
    checkInPElement.textContent = `From date: ${checkIn}`;
    checkOutPElement.textContent = `To date: ${checkOut}`;
    guestsPElement.textContent = `For ${guests} people`;

    let newArticle = document.createElement('article');

    newArticle.appendChild(namesH3lement);
    newArticle.appendChild(checkInPElement);
    newArticle.appendChild(checkOutPElement);
    newArticle.appendChild(guestsPElement);

    let editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList = 'edit-btn';

    let continueButton = document.createElement('button');
    continueButton.textContent = 'Continue';
    continueButton.classList = 'continue-btn';

    let newLiElement = document.createElement('li');
    newLiElement.classList = 'reservation-content';

    newLiElement.appendChild(newArticle);
    newLiElement.appendChild(editButton);
    newLiElement.appendChild(continueButton);

    ulInfoElement.appendChild(newLiElement);

    firstNameInputElement.value = '';
    lastNameInputElement.value = '';
    checkInInputElement.value = '';
    checkOutInputElement.value = '';
    guestsInputElement.value = '';

    nextButoon.disabled = true;

    editButton.addEventListener('click', () => {
      firstNameInputElement.value = firstName;
      lastNameInputElement.value = lastName;
      checkInInputElement.value = checkIn;
      checkOutInputElement.value = checkOut;
      guestsInputElement.value = guests;

      ulInfoElement.innerHTML = '';

      nextButoon.disabled = false;
    });

    continueButton.addEventListener('click', () => {
      editButton.remove();
      continueButton.remove();
      ulConfirmElement.innerHTML = ulInfoElement.innerHTML;
      ulInfoElement.innerHTML = '';

      let confirmButton = document.createElement('button');
      confirmButton.textContent = 'Confrim';
      confirmButton.classList = 'confirm-btn';

      let cancelButton = document.createElement('button');
      cancelButton.textContent = 'Cancel';
      cancelButton.classList = 'cancel-btn';

      let currentLi = document.querySelector('.reservation-content');

      currentLi.appendChild(confirmButton);
      currentLi.appendChild(cancelButton);

      confirmButton.addEventListener('click', () => {
        currentLi.remove();
        nextButoon.disabled = false;

        h1Element.textContent = 'Confirmed.';
        h1Element.classList = 'reservation-confirmed';
      });

      cancelButton.addEventListener('click', () => {
        currentLi.remove();
        nextButoon.disabled = false;

        h1Element.textContent = 'Cancelled.';
        h1Element.classList = 'reservation-cancelled';
      });
    });
  });
}
