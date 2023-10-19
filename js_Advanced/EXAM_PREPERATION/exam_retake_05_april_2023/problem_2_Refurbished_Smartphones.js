// Problem 2 - Refurbished Smartphones

class RefurbishedSmartphones {
  constructor(retailer) {
    this.retailer = retailer;
    this.availableSmartphones = [];
    this.soldSmartphones = [];
    this.revenue = 0;
  }

  addSmartphone(model, storage, price, condition) {
    if (!model || !Number.isInteger(storage) || price < 0 || !condition) {
      throw new Error('Invalid smartphone!');
    }

    this.availableSmartphones.push({
      model,
      storage,
      price,
      condition,
    });
    return `New smartphone added: ${model} / ${storage} GB / ${condition} condition - ${price.toFixed(
      2
    )}$`;
  }

  sellSmartphone(model, desiredStorage) {
    let soldPrice = 0;
    let currentPhone = this.availableSmartphones.find((x) => x.model === model);
    if (!currentPhone) {
      throw new Error(`${model} was not found!`);
    }

    if (desiredStorage <= currentPhone.storage) {
      soldPrice = currentPhone.price;
    } else if (desiredStorage - currentPhone.storage <= 128) {
      soldPrice = currentPhone.price *= 0.9;
    } else if (desiredStorage - currentPhone.storage > 128) {
      soldPrice = currentPhone.price *= 0.8;
    }

    this.soldSmartphones.push({
      model: currentPhone.model,
      storage: currentPhone.storage,
      soldPrice,
    });

    this.availableSmartphones.filter((x) => x.model !== model);

    this.revenue += currentPhone.price;

    return `${model} was sold for ${soldPrice.toFixed(2)}$`;
  }

  upgradePhones() {
    if (this.availableSmartphones.length === 0) {
      throw new Error('There are no available smartphones!');
    }

    this.availableSmartphones = this.availableSmartphones.map(
      (x) => (x.storage *= 2)
    );

    let result = ['Upgraded smartphones:'];
    this.availableSmartphones.forEach((x) =>
      result.push(
        `${x.model} / ${x.storage} GB / ${
          x.condition
        } condition / ${x.price.toFixed(2)}$`
      )
    );

    return result.join('\n');
  }

  salesJournal(criteria) {
    this.soldSmartphones.sort((a, b) => {
      if (criteria === 'storage') {
        return b.storage - a.storage;
      } else if (criteria === 'model') {
        return a.model.localeCompare(b.model);
      } else {
        throw new Error('Invalid criteria!');
      }
    });
    let soldSmartphonesCount = this.soldSmartphones.length;

    let result = [`${this.retailer} has a total income of ${this.revenue}$`];
    result.push(`${soldSmartphonesCount} smartphones sold:`);

    this.soldSmartphones.forEach((x) =>
      result.push(`${x.model} / ${x.storage} GB / ${x.soldPrice}$`)
    );

    return result.join('\n');
  }
}

let retailer = new RefurbishedSmartphones('SecondLife Devices');
retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
retailer.sellSmartphone('Samsung S20 Ultra', 256);
retailer.sellSmartphone('Xiaomi Redmi Note 10 Pro', 256);
console.log(retailer.salesJournal('model'));
