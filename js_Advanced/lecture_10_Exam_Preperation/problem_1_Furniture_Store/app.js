window.addEventListener('load', solve);

function solve() {
  // First we selecet all DOM elements that we need
  const addButton = document.getElementById('add');
  const modelInput = document.getElementById('model');
  const yearInput = document.getElementById('year');
  const descriptionInput = document.getElementById('description');
  const priceInput = document.getElementById('price');
  const furnitureListElement = document.getElementById('furniture-list');

  // We add eventListener to the addButton
  addButton.addEventListener('click', (e) => {
    e.preventDefault(); // we disable the deafalut behaviour of the submite button (refreshing the page uppon click)
    console.log('button - click');

    // in a seperate variables we place the values of all input elements
    let model = modelInput.value;
    let description = descriptionInput.value;
    let year = Number(yearInput.value);
    let price = Number(priceInput.value);

    modelInput.value = '';
    descriptionInput.value = '';
    yearInput.value = '';
    priceInput.value = '';

    // if neede we validate the input from the user

    //checking for falsy values
    if (!model || !description) {
      return;
    }

    if (year <= 0 || price <= 0) {
      return;
    }

    //wwe create an tabel row (tr) element
    let rowElement = document.createElement('tr');

    // we create tabel data (td) elements (late gonna be added to the tr) and two buttons
    let modelCellElement = document.createElement('td');
    let priceCellElement = document.createElement('td');
    let actionsCellElement = document.createElement('td');
    let infoButton = document.createElement('button');
    let buyItButton = document.createElement('button');
    let contentsRowElement = document.createElement('tr');
    let yearContentElelment = document.createElement('td');
    let descriptionContentElement = document.createElement('td');
    let totalPriceElement = document.querySelector('.total-price');

    //we set the text content of the butttons and assign classes according to the task
    infoButton.textContent = 'More Info';
    infoButton.classList.add('moreBtn');

    infoButton.addEventListener('click', (e) => {
      if (e.currentTarget.textContent === 'More Info') {
        e.currentTarget.textContent = 'Less Info';
        contentsRowElement.style.display = 'contents';
      } else {
        e.currentTarget.textContent = 'More Info';
        contentsRowElement.style.display = 'none';
      }
    });

    buyItButton.textContent = 'Buy it';
    buyItButton.classList.add('buyBtn');

    buyItButton.addEventListener('click', () => {
      let currentTotalPrice = Number(totalPriceElement.textContent)
      let totalPrice = currentTotalPrice + price;
      totalPriceElement.textContent = totalPrice.toFixed(2);

      rowElement.remove();
      contentsRowElement.remove();
    });

    actionsCellElement.appendChild(infoButton);
    actionsCellElement.appendChild(buyItButton);

    // we place the textext content in the coresponding cells
    modelCellElement.textContent = model;
    priceCellElement.textContent = price.toFixed(2); // accodrding to setup

    // aasigning class to row element
    rowElement.classList.add('info');

    // place (append) all created element to tr
    rowElement.appendChild(modelCellElement);
    rowElement.appendChild(priceCellElement);
    rowElement.appendChild(actionsCellElement);

    yearContentElelment.textContent = `Year: ${year}`;
    descriptionContentElement.setAttribute('colespan', 3);
    descriptionContentElement.textContent = `Description: ${description}`;

    contentsRowElement.classList.add('hide');
    contentsRowElement.style.display = 'none';

    contentsRowElement.appendChild(yearContentElelment);
    contentsRowElement.appendChild(descriptionContentElement);

    furnitureListElement.appendChild(rowElement);
    furnitureListElement.appendChild(contentsRowElement);
  });
}
