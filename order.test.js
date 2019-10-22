const Order = require("./order");
const resturantInfo = require("./hipstercoffee");

describe("Order", () => {
  describe("#getTotal", () => {
    it("returns the total of the items", () => {
      let order = new Order("Test Name", resturantInfo);
      order.addItem("Tea", 1);
      expect(order.getTotal()).toEqual(3.65);
      order.addItem("Tea", 2);
      expect(order.getTotal()).toEqual(10.95);
      order.addItem("Single Espresso", 2);
      expect(order.getTotal()).toEqual(15.05);
    });
  });

  describe("#printReceipt", () => {
    it("Will print correct receipt after one order", () => {
      let order = new Order("Test Name", resturantInfo);
      order.addItem("Tea", 1);
      expect(order.printReceipt()).toEqual(
        "Test Name\nTea\t\t\t1 x 3.65\nTax\t\t\t0.32\nTotal:\t\t\t£4.38"
      );
    });

    xit("Prints out correct receipt with multiple order of same item", () => {
      let order = new Order("Test Name", resturantInfo);
      order.addItem("Tea", 2);
      expect(order.printReceipt()).toEqual(
        "Test Name\nTea\t\t\t2 x 3.65\nTax\t\t\t0.64\nTotal:\t\t\t£8.76"
      );
    });
  });
});
