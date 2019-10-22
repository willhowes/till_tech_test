const Order = require("./order");
const resturantInfo = require("./hipstercoffee");

describe("Order", () => {
  let order = new Order("Test Name", resturantInfo);

  beforeEach(() => {
    return order;
  });

  describe("#calculateTotal", () => {
    it("returns the total of all the items", () => {
      order.addItem("Tea", 1);
      expect(order.calculateTotal()).toEqual(3.65);
    });
  });

  describe("#printReceipt", () => {
    it("Will print correct receipt after one order", () => {
      order.addItem("Tea", 1);
      expect(order.printReceipt()).toEqual(
        "Test Name\nTea\t\t\t1 x 3.65\nTax\t\t\t0.32\nTotal:\t\t\t£4.38"
      );
    });

    xit("Prints out correct receipt with multiple order of same item", () => {
      order.addItem("Tea", 2);
      expect(order.printReceipt()).toEqual(
        "Test Name\nTea\t\t\t2 x 3.65\nTax\t\t\t0.64\nTotal:\t\t\t£8.76"
      );
    });
  });
});
