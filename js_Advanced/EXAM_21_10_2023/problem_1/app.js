window.addEventListener('load', solution);

function solution() {
  const employeeInputeElement = document.getElementById('employee');
  const categoryInputeElement = document.getElementById('category');
  const urgencyInputeElement = document.getElementById('urgency');
  const teamInputeElement = document.getElementById('team');
  const descriptionInputeElement = document.getElementById('description');

  const ulPreviewElement = document.querySelector('.preview-list');
  const ulPendingElement = document.querySelector('.pending-list');
  const ulResolvedElement = document.querySelector('.resolved-list');

  const addButton = document.getElementById('add-btn');

  addButton.addEventListener('click', (e) => {
    e.preventDefault();

    let employee = employeeInputeElement.value; // POTENTIAL PROBLEM - VALUE
    let category = categoryInputeElement.value;
    let urgency = urgencyInputeElement.value;
    let team = teamInputeElement.value;
    let description = descriptionInputeElement.value;

    if (
      employee === '' ||
      category === '' ||
      urgency === '' ||
      team === '' ||
      description === ''
    ) {
      return;
    }
    
    let pEmployeeElement = document.createElement('p');
    let pCategoryElement = document.createElement('p');
    let pUrgencyElement = document.createElement('p');
    let pTeamElement = document.createElement('p');
    let pDescriptionElement = document.createElement('p');

    pEmployeeElement.textContent = `From: ${employee}`;
    pCategoryElement.textContent = `Category: ${category}`;
    pUrgencyElement.textContent = `Urgency: ${urgency}`;
    pTeamElement.textContent = `Assigned to: ${team}`;
    pDescriptionElement.textContent = `"Description: ${description}."`;

    let newArticleElement = document.createElement('article');
    newArticleElement.appendChild(pEmployeeElement);
    newArticleElement.appendChild(pCategoryElement);
    newArticleElement.appendChild(pUrgencyElement);
    newArticleElement.appendChild(pTeamElement);
    newArticleElement.appendChild(pDescriptionElement);

    let editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList = 'edit-btn';

    let continueButton = document.createElement('button');
    continueButton.textContent = 'Continue';
    continueButton.classList = 'continue-btn';

    let newLiElement = document.createElement('li');
    newLiElement.classList = 'problem-content';

    newLiElement.appendChild(newArticleElement);
    newLiElement.appendChild(editButton);
    newLiElement.appendChild(continueButton);

    ulPreviewElement.appendChild(newLiElement);

    employeeInputeElement.value = '';
    categoryInputeElement.value = '';
    urgencyInputeElement.value = '';
    teamInputeElement.value = '';
    descriptionInputeElement.value = '';

    addButton.disabled = true;

    editButton.addEventListener('click', () => {
      employeeInputeElement.value = employee;
      categoryInputeElement.value = category;
      urgencyInputeElement.value = urgency;
      teamInputeElement.value = team;
      descriptionInputeElement.value = description;

      ulPreviewElement.innerHTML = '';

      addButton.disabled = false;
    });

    continueButton.addEventListener('click', () => {
      document.querySelector('.edit-btn').remove();
      document.querySelector('.continue-btn').remove();

      ulPendingElement.innerHTML = ulPreviewElement.innerHTML;
      ulPreviewElement.innerHTML = '';

      let resolvedButton = document.createElement('button');
      resolvedButton.textContent = 'Resolved';
      resolvedButton.classList = 'resolve-btn';

      document.querySelector('.problem-content').appendChild(resolvedButton);

      resolvedButton.addEventListener('click', () => {
        document.querySelector('.resolve-btn').remove();
        ulResolvedElement.innerHTML = ulPendingElement.innerHTML;
        ulPendingElement.innerHTML = '';

        let clearButton = document.createElement('button');
        clearButton.textContent = 'Clear';
        clearButton.classList = 'clear-btn';

        document.querySelector('.problem-content').appendChild(clearButton);

        clearButton.addEventListener('click', () => {
          document.querySelector('.clear-btn').remove();
          document.querySelector('.problem-content').remove();
          addButton.disabled = false;
        });
      });
    });
  });
}
