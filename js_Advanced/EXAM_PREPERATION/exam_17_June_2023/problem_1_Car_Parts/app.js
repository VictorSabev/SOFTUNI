window.addEventListener('load', solve);

function solve() {
  const modelInputElement = document.getElementById('car-model');
  const yearlInputElement = document.getElementById('car-year');
  const partNamelInputElement = document.getElementById('part-name');
  const partNumberInputElement = document.getElementById('part-number');
  const conditionlInputElement = document.getElementById('condition');

  const ulElement = document.querySelector('.info-list');
  const completeImgElement = document.getElementById('complete-img');
  const completeParagraphElement = document.getElementById('complete-text');
  const confirmList = document.querySelector('.confirm-list');

  const nextButton = document.getElementById('next-btn');

  nextButton.addEventListener('click', (e) => {
    e.preventDefault();
    let model = modelInputElement.value;
    let year = yearlInputElement.value;
    let partName = partNamelInputElement.value;
    let partNumber = partNumberInputElement.value;
    let condition = conditionlInputElement.value;

    if (
      !model ||
      !year ||
      !partName ||
      !partNumber ||
      !condition ||
      year < 1980 ||
      year > 2023
    ) {
      return;
    }

    let modelP = document.createElement('p');
    let yearP = document.createElement('p');
    let partNameP = document.createElement('p');
    let partNumberP = document.createElement('p');
    let conditionP = document.createElement('p');

    modelP.textContent = model;
    yearP.textContent = year;
    partNameP.textContent = partName;
    partNumberP.textContent = partNumber;
    conditionP.textContent = condition;

    let newLi = document.createElement('li');
    newLi.classList = 'part-content';
    let newArticle = document.createElement('article');

    let editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList = 'edit-btn';

    let continueButton = document.createElement('button');
    continueButton.textContent = 'Continue';
    continueButton.classList = 'continue-btn';

    newArticle.appendChild(modelP);
    newArticle.appendChild(yearP);
    newArticle.appendChild(partNameP);
    newArticle.appendChild(partNumberP);
    newArticle.appendChild(conditionP);

    newLi.appendChild(newArticle);
    newLi.appendChild(editButton);
    newLi.appendChild(continueButton);

    ulElement.appendChild(newLi);

    modelInputElement.value = '';
    yearlInputElement.value = '';
    partNamelInputElement.value = '';
    partNumberInputElement.value = '';
    conditionlInputElement.value = '';

    completeImgElement.style.visibility = 'hidden';
    completeParagraphElement.textContent = '';

    nextButton.disabled = true;

    editButton.addEventListener('click', () => {
      let pElemnets = document.querySelectorAll('.part-content article p');

      modelInputElement.value = pElemnets[0].textContent;
      yearlInputElement.value = pElemnets[1].textContent;
      partNamelInputElement.value = pElemnets[2].textContent;
      partNumberInputElement.value = pElemnets[3].textContent;
      conditionlInputElement.value = pElemnets[4].textContent;

      ulElement.innerHTML = '';

      nextButton.disabled = false;
    });

    continueButton.addEventListener('click', () => {
      confirmList.innerHTML = ulElement.innerHTML;
      ulElement.innerHTML = '';

      document.querySelector('.edit-btn').remove();
      document.querySelector('.continue-btn').remove();

      let confirmButton = document.createElement('button');
      confirmButton.textContent = 'Confirm';
      confirmButton.classList = 'confirm-btn';

      let cancelButton = document.createElement('button');
      cancelButton.textContent = 'Cancel';
      cancelButton.classList = 'cancel-btn';

      let li = document.querySelector('.part-content');
      li.appendChild(confirmButton);
      li.appendChild(cancelButton);

      confirmButton.addEventListener('click', () => {
        li.remove();
        nextButton.disabled = false;
        completeImgElement.style.visibility = "visible";
        completeParagraphElement.textContent += 'Part is Ordered!';
        

      });

      cancelButton.addEventListener('click', () => {
        li.remove();
        nextButton.disabled = false;

      });
    });
  });
}
