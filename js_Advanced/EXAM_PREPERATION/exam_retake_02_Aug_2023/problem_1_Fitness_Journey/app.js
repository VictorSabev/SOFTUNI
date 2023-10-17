window.addEventListener('load', solve);

function solve() {
  const nameInputElement = document.getElementById('name');
  const emailInputElement = document.getElementById('email');
  const contactNumberInputElement = document.getElementById('contact-number');
  const classTypeInputElement = document.getElementById('class-type');
  const classTimeInputElement = document.getElementById('class-time');

  const nextButton = document.getElementById('next-btn');

  const divElementPreview = document.querySelector('.class-info');
  const divElementConfirm = document.querySelector('.confirm-class');

  nextButton.addEventListener('click', (e) => {
    e.preventDefault();

    let name = nameInputElement.value;
    let email = emailInputElement.value;
    let contactNumber = contactNumberInputElement.value;
    let classType = classTypeInputElement.value;
    let classTime = classTimeInputElement.value;

    if (!name || !email || !contactNumber || !classType || !classTime) {
      return;
    }

    let nameP = document.createElement('p');
    let emailP = document.createElement('p');
    let contactNumberp = document.createElement('p');
    let classTypeP = document.createElement('p');
    let classTimeP = document.createElement('p');

    nameP.textContent = name;
    emailP.textContent = email;
    contactNumberp.textContent = contactNumber;
    classTypeP.textContent = classType;
    classTimeP.textContent = classTime;

    let newLiElement = document.createElement('li');
    newLiElement.classList = 'info-item';

    let newArticleElement = document.createElement('article');
    newArticleElement.classList = 'personal-info';

    newArticleElement.appendChild(nameP);
    newArticleElement.appendChild(emailP);
    newArticleElement.appendChild(contactNumberp);
    newArticleElement.appendChild(classTypeP);
    newArticleElement.appendChild(classTimeP);

    let editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList = 'edit-btn';
    let continueButton = document.createElement('button');
    continueButton.textContent = 'Continue';
    continueButton.classList = 'continue-btn';

    newLiElement.appendChild(newArticleElement);
    newLiElement.appendChild(editButton);
    newLiElement.appendChild(continueButton);

    divElementPreview.appendChild(newLiElement);

    nameInputElement.value = '';
    emailInputElement.value = '';
    contactNumberInputElement.value = '';
    classTypeInputElement.value = '';
    classTimeInputElement.value = '';

    nextButton.disabled = true;

    editButton.addEventListener('click', () => {
      let article = document.querySelector('.personal-info');
      console.log(article);
      let pElements = article.getElementsByTagName('p');

      nameInputElement.value = pElements[0].textContent;
      emailInputElement.value = pElements[1].textContent;
      contactNumberInputElement.value = pElements[2].textContent;
      classTypeInputElement.value = pElements[3].textContent;
      classTimeInputElement.value = pElements[4].textContent;

      nextButton.disabled = false;
      document.querySelector('.class-info').innerHTML = '';
    });

    continueButton.addEventListener('click', () => {
      divElementConfirm.innerHTML = divElementPreview.innerHTML;
      divElementPreview.innerHTML = '';
      document.querySelector('.edit-btn').remove();
      document.querySelector('.continue-btn').remove();

      let cancleButton = document.createElement('button');
      cancleButton.textContent = 'Cancel';
      cancleButton.classList = 'cancel-btn';

      let confirmButton = document.createElement('button');
      confirmButton.textContent = 'Confirm';
      confirmButton.classList = 'confirm-btn';

      let listElement = document.querySelector('.info-item');

      listElement.appendChild(cancleButton);
      listElement.appendChild(confirmButton);

      cancleButton.addEventListener('click', () => {
        divElementConfirm.innerHTML = '';
        nextButton.disabled = false;
      });

      confirmButton.addEventListener('click', () => {
        document.getElementById('main').innerHTML = '';

        let h1Elemnet = document.createElement('h1');
        h1Elemnet.textContent =
          'Thnak you for scheduling your appointment, we look forward to seeing you!';
        h1Elemnet.id = 'thank-you';
        
        let doneButton = document.createElement('button');
        doneButton.textContent = 'Done';
        doneButton.id = 'done-btn';

        doneButton.addEventListener('click', () => {location.reload()});

        let body = document.getElementById('body');
        body.appendChild(h1Elemnet);
        body.appendChild(doneButton);
      });
    });
  });
}
