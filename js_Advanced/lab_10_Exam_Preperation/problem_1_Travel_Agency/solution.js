window.addEventListener('load', solution);

function solution() {
  // selecting the DOM elements we are going to work with:
  const nameInputElement = document.getElementById('fname');
  const emailInputElement = document.getElementById('email');
  const phoneInputElement = document.getElementById('phone');
  const addressInputElement = document.getElementById('address');
  const postCodeInputElement = document.getElementById('code');
    
  const submitButton = document.getElementById('submitBTN');
  const editButton = document.getElementById('editBTN');
  const continueButton = document.getElementById('continueBTN');
  
  const ulPreviewElelemnt = document.getElementById('infoPreview');
  const divBlockElement = document.getElementById('block');

  // adding eventListener to the submit button:
  submitButton.addEventListener('click', () => {
    //getting the values of the input fileds
    let fullName = nameInputElement.value;
    let email = emailInputElement.value;
    let phoneNumber = phoneInputElement.value;
    let address = addressInputElement.value;
    let postalCode = postCodeInputElement.value;

    if (!fullName || !email) {
      return;
    }

    //creating new LI
    let nameLi = document.createElement('li');
    let emailLi = document.createElement('li');
    let phoneLi = document.createElement('li');
    let addressLi = document.createElement('li');
    let postCodeLi = document.createElement('li');

    // assigning the text content of each LI
    nameLi.textContent = `Full Name: ${fullName}`;
    emailLi.textContent = `Email: ${email}`;
    phoneLi.textContent = `Phone Number: ${phoneNumber}`;
    addressLi.textContent = `Address: ${address}`;
    postCodeLi.textContent = `Postal Code: ${postalCode}`;

    //appending all li to ul
    ulPreviewElelemnt.appendChild(nameLi);
    ulPreviewElelemnt.appendChild(emailLi);
    ulPreviewElelemnt.appendChild(phoneLi);
    ulPreviewElelemnt.appendChild(addressLi);
    ulPreviewElelemnt.appendChild(postCodeLi);

    //clearing the input fileds values
    nameInputElement.value = '';
    emailInputElement.value = '';
    phoneInputElement.value = '';
    addressInputElement.value = '';
    postCodeInputElement.value = '';

    //setting the buttons disable status
    submitButton.disabled = true;
    editButton.disabled = false;
    continueButton.disabled = false;

    console.log(ulPreviewElelemnt);
  });
  // adding eventListener to the edit button
  editButton.addEventListener('click', () => {
    // we set the coresponding input value from the text content of the li by isolating the perosnal information and removeing the li from the ul
    nameInputElement.value = ulPreviewElelemnt.firstChild.textContent
      .split('Full Name: ')
      .pop();
    ulPreviewElelemnt.firstChild.remove();
    emailInputElement.value = ulPreviewElelemnt.firstChild.textContent
      .split('Email: ')
      .pop();
    ulPreviewElelemnt.firstChild.remove();
    phoneInputElement.value = ulPreviewElelemnt.firstChild.textContent
      .split('Phone Number: ')
      .pop();
    ulPreviewElelemnt.firstChild.remove();
    addressInputElement.value = ulPreviewElelemnt.firstChild.textContent
      .split('Address: ')
      .pop();
    ulPreviewElelemnt.firstChild.remove();
    postCodeInputElement.value = ulPreviewElelemnt.firstChild.textContent
      .split('Postal Code: ')
      .pop();
    ulPreviewElelemnt.firstChild.remove();

    //setting the buttons disable status
    submitButton.disabled = false;
    editButton.disabled = true;
    continueButton.disabled = true;
  });

  //adding functionality to continue button
  continueButton.addEventListener('click', () => {
    // empty div container
    divBlockElement.innerHTML = '';
    // adding h3 element
    let h3Element = document.createElement('h3');
    let reservationCofirmationMessege = 'Thank you for your reservation!';
    h3Element.textContent = reservationCofirmationMessege;
    divBlockElement.appendChild(h3Element);
  });
}
