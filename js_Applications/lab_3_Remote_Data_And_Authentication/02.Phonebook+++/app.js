function attachEvents() {
  
  // get DOM elements
  const url = 'http://localhost:3030/jsonstore/phonebook';
  const ulElement = document.getElementById('phonebook');
  const loadButton = document.getElementById('btnLoad');
  const createButton = document.getElementById('btnCreate');

  const [person, phone] = [
    document.getElementById('person'),
    document.getElementById('phone'),
  ];

  loadButton.addEventListener('click', loadPhonebookEntries);
  createButton.addEventListener('click', postPhonebookEntries);

  // GET request
  async function loadPhonebookEntries() {
    ulElement.innerHTML = '';
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);

    Object.values(data).forEach((x) => {
      let newLi = document.createElement('li');
      newLi.textContent = `${x.person}: ${x.phone}`;

      const newDelBtn = document.createElement('button');
      newDelBtn.textContent = 'Delete';
      newDelBtn.addEventListener('click', deletePhonebookEntries);
      newLi.appendChild(newDelBtn);
      ulElement.appendChild(newLi);
    });
  }

  //POST request
  async function postPhonebookEntries() {
    if (person.value !== '' && phone.value !== '') {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ person: person.value, phone: phone.value }),
      });

      if (ulElement.innerHTML !== '') {
        loadPhonebookEntries();
      }
      person.value = '';
      phone.value = '';
    } else {
      alert('Please fill all the necessary fileds!');
    }
  }

  //DELETE request
  async function deletePhonebookEntries(ev) {
    const id = ev.target.parentNode.id;
    ev.target.parentNode.remove();
    const deleteResposne = await fetch(`${url}/${id}`, {method: 'DELETE'});
  }
}
attachEvents();
