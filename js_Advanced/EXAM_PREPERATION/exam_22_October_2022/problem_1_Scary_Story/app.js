window.addEventListener('load', solve);

function solve() {
  const firstNameInputeElement = document.getElementById('first-name');
  const lastNameInputeElement = document.getElementById('last-name');
  const ageInputeElement = document.getElementById('age');
  const titleInputeElement = document.getElementById('story-title');
  const genreInputeElement = document.getElementById('genre');
  const storyInputeElement = document.getElementById('story');

  const ulPreviewElement = document.getElementById('preview-list');
  const diveMainElement = document.getElementById('main');

  const publishButton = document.getElementById('form-btn');

  publishButton.addEventListener('click', (e) => {
    e.preventDefault();

    let firstName = firstNameInputeElement.value;
    let lastName = lastNameInputeElement.value;
    let age = ageInputeElement.value;
    let title = titleInputeElement.value;
    let genre = genreInputeElement.value;
    let story = storyInputeElement.value;

    if (!firstName || !lastName || !age || !title || !story) {
      return;
    }

    let namesH4Element = document.createElement('h4');
    let agePElement = document.createElement('p');
    let titlePElement = document.createElement('p');
    let genrePElement = document.createElement('p');
    let storyPElement = document.createElement('p');

    namesH4Element.textContent = `Name: ${firstName} ${lastName}`;
    agePElement.textContent = `Age: ${age}`;
    titlePElement.textContent = `Title: ${title}`;
    genrePElement.textContent = `Genre: ${genre}`;
    storyPElement.textContent = story;

    let newArticleElement = document.createElement('article');
    newArticleElement.appendChild(namesH4Element);
    newArticleElement.appendChild(agePElement);
    newArticleElement.appendChild(titlePElement);
    newArticleElement.appendChild(genrePElement);
    newArticleElement.appendChild(storyPElement);

    let saveButton = document.createElement('button');
    saveButton.textContent = 'Save story';
    saveButton.classList = 'save-btn';

    let editButton = document.createElement('button');
    editButton.textContent = 'Edit story';
    editButton.classList = 'edit-btn';

    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete story';
    deleteButton.classList = 'delete-btn';

    let newLi = document.createElement('li');
    newLi.classList = 'story-info';

    newLi.appendChild(newArticleElement);
    newLi.appendChild(saveButton);
    newLi.appendChild(editButton);
    newLi.appendChild(deleteButton);

    ulPreviewElement.appendChild(newLi);

    firstNameInputeElement.value = '';
    lastNameInputeElement.value = '';
    ageInputeElement.value = '';
    titleInputeElement.value = '';
    genreInputeElement.value = '';
    storyInputeElement.value = '';

    publishButton.disabled = true;

    editButton.addEventListener('click', () => {
      firstNameInputeElement.value = firstName;
      lastNameInputeElement.value = lastName;
      ageInputeElement.value = age;
      titleInputeElement.value = title;
      genreInputeElement.value = genre;
      storyInputeElement.value = story;

      publishButton.disabled = false;
      newLi.remove();
    });

    deleteButton.addEventListener('click', () => {
      newLi.remove();

      publishButton.disabled = false;
    })
    
    saveButton.addEventListener('click', () => {
      diveMainElement.innerHTML = '';

      let newH1Element = document.createElement('h1');
      newH1Element.textContent = 'Your scary story is saved!';
      diveMainElement.appendChild(newH1Element);
    })

  });
}
