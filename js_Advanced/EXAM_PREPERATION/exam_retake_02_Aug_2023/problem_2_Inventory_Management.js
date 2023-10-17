// Problem 2 - Inventory Management

class InventoryManager {
  constructor(capacity) {
    this.capacity = capacity;
    this.items = [];
    this.outOFStock = [];
  }

  addItem(itemName, quantity) {
    if (quantity <= 0) {
      throw new Error('Quantity must be greater than zero.');
    }

    if (this.items.length >= this.capacity) {
      throw new Error('The inventory is already full.');
    }

    let currentObj = this.items.find((x) => x.itemName === itemName);

    if (!currentObj) {
      this.items.push({
        itemName,
        quantity,
      });
    } else {
      currentObj.quantity += quantity;
    }
    return `Added ${quantity} ${itemName}(s) to the inventory.`;
  }

  sellItem(itemName, quantity) {
    if (quantity <= 0) {
      throw new Error('Quantity must be greater than zero.');
    }

    let currentObj = this.items.find(x => x.itemName === itemName);
    
    if(!currentObj) {
      throw new Error(`The item ${itemName} is not available in the inventory.`);
    }

    if (quantity > currentObj.quantity) {
      throw new Error(`Not enough ${itemName}(s) in stock.`);
    }

    currentObj.quantity -= quantity;

    let index; 
    if(currentObj.quantity === 0){
       index = this.items.indexOf(currentObj);
       let transferItem = this.items.splice(index, 1);
       this.outOFStock.push(transferItem[0].itemName);
    } 
    return `Sold ${quantity} ${itemName}(s) from the inventory.`
    }

  restockItem(itemName, quantity) {
    if (quantity <= 0) {
      throw new Error('Quantity must be greater than zero.');
    }
    let currentItem = this.items.find(x => x.itemName === itemName);
    
    if (currentItem) {
      currentItem.quantity += quantity;
    } else {
      this.items.push({
        itemName,
        quantity,
      })
    }

    if (this.outOFStock.includes(itemName)) {
      let targetIndex = this.outOFStock.indexOf(itemName);
      this.outOFStock.splice(targetIndex, 1);
    }

    return `Restocked ${quantity} ${itemName}(s) in the inventory.`
 
  }

  getInventorySummary() {
    let result = [];
    result.push('Current Inventory:')
    this.items.forEach(x => result.push(`${x.itemName}: ${x.quantity}`));
    if (this.outOFStock.length > 0) {
      let outOfStockArr = [];
      this.outOFStock.forEach(x => outOfStockArr.push(`${x}`))
      outOfStockArr = 'Out of Stock: ' + outOfStockArr.join(', ');
      result.push(outOfStockArr);
    }
    return result.join('\n');
  }
}

const manager = new InventoryManager(3);

console.log(manager.addItem("Drill", 10));
console.log(manager.addItem("Hammer", 5));
console.log(manager.addItem("Chisel", 3));
console.log(manager.sellItem("Drill", 3));
console.log(manager.sellItem("Hammer", 5)); 
console.log(manager.restockItem("Drill", 5));
console.log(manager.restockItem("Paintbrush", 1));
console.log(manager.getInventorySummary());



