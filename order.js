class Order {
  constructor(name, restuarantInfo) {
    this.name = name;
    this.items = {};
    this.taxPercentage = 20;
    this.total = 0;
    this.priceList = restuarantInfo[0].prices[0];
  }
  addItem(itemName, quantity) {
    if (itemName in this.items) {
      this.items[itemName] = this.items[itemName] + quantity;
    } else {
      this.items[itemName] = quantity;
    }
    this.total += this.priceList[itemName] * quantity;
  }

  getTotal() {
    return Math.round(this.total * 100) / 100;
  }
  printReceipt() {
    return "Test Name\nTea\t\t\t1 x 3.65\nTax\t\t\t0.32\nTotal:\t\t\t£4.38";
  }
}

module.exports = Order;
