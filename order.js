class Order {
  constructor(name, restuarantInfo) {
    this.name = name;
    this.items = {};
    this.taxPercentage = 20;
    this.runningTotal = 0;
    this.runningTaxTotal = 0;
    this.priceList = restuarantInfo[0].prices[0];
    this.restuarantName = restuarantInfo[0].shopName;
    this.restuarantAddress = restuarantInfo[0].address;
    this.restaurantPhone = restuarantInfo[0].phone;
  }
  addItem(itemName, quantity) {
    this.addItemToOrder(itemName, quantity);
    this.updateRunningTotal(itemName, quantity);
    this.updateRunningTaxTotal(itemName, quantity);
  }

  addItemToOrder(itemName, quantity) {
    if (itemName in this.items) {
      this.items[itemName] = this.items[itemName] + quantity;
    } else {
      this.items[itemName] = quantity;
    }
  }

  updateRunningTotal(itemName, quantity) {
    this.runningTotal += this.priceList[itemName] * quantity;
  }

  updateRunningTaxTotal(itemName, quantity) {
    this.runningTaxTotal +=
      ((this.priceList[itemName] * quantity) / (this.taxPercentage + 100)) *
      this.taxPercentage;
  }

  getRunningTotal() {
    return this.runningTotal.toFixed(2);
  }

  getRunningTaxTotal() {
    return this.runningTaxTotal.toFixed(2);
  }

  printReceipt() {
    const orderDetails = `${this.restuarantName}\n\n${this.restuarantAddress}\nPhone: ${this.restaurantPhone}\n${this.name}\n`;
    let orderItems = [];
    Object.keys(this.items).forEach(item => {
      orderItems.push(
        `${item}\t\t\t${this.items[item]} x ${this.priceList[item]}`
      );
    });
    let finalReceipt = "";
    return finalReceipt.concat(
      orderDetails,
      orderItems,
      `\nTax\t\t\t${this.getRunningTaxTotal()}`,
      `\nTotal:\t\t\t£${this.getRunningTotal()}`
    );
  }
}

module.exports = Order;
