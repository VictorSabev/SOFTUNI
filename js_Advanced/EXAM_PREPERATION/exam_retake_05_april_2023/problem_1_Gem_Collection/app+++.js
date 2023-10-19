window.addEventListener('load', solve);

function solve() {
  const nameInputElement = document.getElementById('gem-name');
  const colorInputElement = document.getElementById('color');
  const caratsInputElement = document.getElementById('carats');
  const priceInputElement = document.getElementById('price');
  const typeInputElement = document.getElementById('type');

  const addButton = document.getElementById('add-btn');

  const previewUlElement = document.getElementById('preview-list');
  const collectionUlElement = document.getElementById('collection');


  addButton.addEventListener('click', () => {
    let name = nameInputElement.value;
    let color = colorInputElement.value;
    let carats = caratsInputElement.value;
    let price = priceInputElement.value;
    let type = typeInputElement.value;

    if (!name || !color || !carats || !price || !type) {
      return;
    }

    let nameH4Element = document.createElement('h4');
    let colorPElement = document.createElement('p');
    let CaratsPElement = document.createElement('p');
    let pricePElement = document.createElement('p');
    let typePElement = document.createElement('p');

    nameH4Element.textContent = name;
    colorPElement.textContent = `Color: ${color}`;
    CaratsPElement.textContent = `Carats: ${carats}`;
    pricePElement.textContent = `Price: ${price}$`;
    typePElement.textContent = `Type: ${type}`;

    let newLiElement = document.createElement('li');
    newLiElement.classList = 'gem-info';

    let newArticleElement = document.createElement('article');

    newArticleElement.appendChild(nameH4Element);
    newArticleElement.appendChild(colorPElement);
    newArticleElement.appendChild(CaratsPElement);
    newArticleElement.appendChild(pricePElement);
    newArticleElement.appendChild(typePElement);

    newLiElement.appendChild(newArticleElement);

    let saveButton = document.createElement('button');
    saveButton.textContent = 'Save to Collection';
    saveButton.classList = 'save-btn';

    let editButton = document.createElement('button');
    editButton.textContent = 'Edit Information';
    editButton.classList = 'edit-btn';

    let cancelButton = document.createElement('button');
    cancelButton.textContent = 'Cancel';
    cancelButton.classList = 'cancel-btn';

    newLiElement.appendChild(saveButton);
    newLiElement.appendChild(editButton);
    newLiElement.appendChild(cancelButton);

    previewUlElement.appendChild(newLiElement);

    nameInputElement.value = '';
    colorInputElement.value = '';
    caratsInputElement.value = '';
    priceInputElement.value = '';
    typeInputElement.value = '';

    addButton.disabled = true;

    editButton.addEventListener('click', () => {
      
      nameInputElement.value = name;
      colorInputElement.value = color;
      caratsInputElement.value = carats;
      priceInputElement.value = price;
      typeInputElement.value = type;

      previewUlElement.innerHTML = '';
      
      addButton.disabled = false;
    });

    saveButton.addEventListener('click', () => {

                                  
          
      let newPElement = document.createElement('p');
      newPElement.classList = 'collection-item';
      newPElement.textContent = `${name} - Color: ${color}/ Carats: ${carats}/ Price: ${price}$/ Type: ${type}` 

      let newNewLi = document.createElement('li');
      newNewLi.classList = 'collection-item'

      newNewLi.appendChild(newPElement);

      collectionUlElement.appendChild(newNewLi);
      previewUlElement.innerHTML = ''; 
      
    })

    cancelButton.addEventListener('click', () => {
      previewUlElement.innerHTML = '';
      addButton.disabled = false;

    })


  });
}
