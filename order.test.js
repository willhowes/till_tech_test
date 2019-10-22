const Order = require("./order");

describe("Order", () => {
  let order = new Order("Test Name");

  beforeEach(() => {
    return order;
  });
  describe("#printReceipt", () => {
    it("Will print correct receipt after one order", () => {
      // const order = new Order("Test Name");
      order.addItem("Tea", 1);
      expect(order.printReceipt()).toEqual(
        "Test Name\nTea\t\t\t1 x 3.65\nTax\t\t\t0.32\nTotal:\t\t\t£3.97"
      );
    });
  });
});
