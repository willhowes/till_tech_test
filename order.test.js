const Order = require("./order");

describe("Order", () => {
  describe("#printReceipt", () => {
    it("Will print correct receipt after one order", () => {
      const order = new Order("Barry");
      order.addItem("Tea", 1);
      expect(order.printReceipt()).toEqual(
        "Barry\nTea\t\t\t1 x 3.65\nTax\t\t\t0.32\nTotal:\t\t\t£3.97"
      );
    });
  });
});
