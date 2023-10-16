// Task 9 - Auto-Engineering Company

// NOT MINE SOLUTION

let dataBase = {}

function autoGarage (inputArr) {
  inputArr.forEach(element => {
    let [brand, model, producedUnits] = element.split('|');
    
    if (!dataBase.hasOwnProperty(brand)) {
      dataBase[brand] = {};
    }

    if (!dataBase[brand].hasOwnProperty(model)) {
      dataBase[brand][model] = 0;
    }

    dataBase[brand][model] += Number(producedUnits);
  });
  for (const[brand, models] of Object.entries(dataBase)) {
    console.log(brand);

    for (const [model, producedUnits] of Object.entries(models)) {
      console.log(`###${model} -> ${producedUnits}`);
    }
  }
};

autoGarage(['Audi | Q7 | 1000',

'Audi | Q6 | 100',

'BMW | X5 | 1000',

'BMW | X6 | 100',

'Citroen | C4 | 123',

'Volga | GAZ-24 | 1000000',

'Lada | Niva | 1000000',

'Lada | Jigula | 1000000',

'Citroen | C4 | 22',

'Citroen | C5 | 10']);