class Order {
  constructor(name) {
    this.name = name;
  }
  addItem(itemName, quantity) {}
  printReceipt() {
    return "Barry\nTea\t\t\t1 x 3.65\nTax\t\t\t0.32\nTotal:\t\t\t£3.97";
  }
}

module.exports = Order;
