const Order = require("./order");
const resturantInfo = require("./hipstercoffee");

describe("Order", () => {
  describe("#getRunningTotal", () => {
    it("returns the total of the items", () => {
      let order = new Order("Test Name", resturantInfo);
      order.addItem("Tea", 1);
      expect(order.getRunningTotal()).toEqual("3.65");
      order.addItem("Tea", 2);
      expect(order.getRunningTotal()).toEqual("10.95");
      order.addItem("Single Espresso", 2);
      expect(order.getRunningTotal()).toEqual("15.05");
    });
  });

  describe("getRunningTaxTotal", () => {
    it("Correctly calcuates tax when items added to order", () => {
      let order = new Order("Test Name", resturantInfo);
      order.addItem("Tea", 1);
      expect(order.getRunningTaxTotal()).toEqual("0.61");
      order.addItem("Choc Mudcake", 2);
      expect(order.getRunningTaxTotal()).toEqual("2.74");
    });
  });

  describe("#printReceipt", () => {
    it("Will print correct receipt after one order", () => {
      let order = new Order("Test Name", resturantInfo);
      order.addItem("Tea", 1);
      expect(order.printReceipt()).toEqual(
        "The Coffee Connection\n\n123 Lakeside Way\nPhone: 16503600708\nTest Name\nTea\t\t\t1 x 3.65\nTax\t\t\t0.61\nTotal:\t\t\t£3.65\nCash:\t\t\t£0.00\nChange:\t\t\t£0.00"
      );
    });

    it("Prints out correct receipt with multiple order of same item", () => {
      let order = new Order("Test Name", resturantInfo);
      order.addItem("Tea", 2);
      expect(order.printReceipt()).toEqual(
        "The Coffee Connection\n\n123 Lakeside Way\nPhone: 16503600708\nTest Name\nTea\t\t\t2 x 3.65\nTax\t\t\t1.22\nTotal:\t\t\t£7.30\nCash:\t\t\t£0.00\nChange:\t\t\t£0.00"
      );
    });
  });

  describe("#receivePayment", () => {
    let order = new Order("Test Name", resturantInfo);
    order.addItem("Chocolate Chip Muffin", 1);
    order.receivePayment(4.05);
    expect(order.getChangeDue()).toEqual("0.00");
    expect(order.getPaymentReceived()).toEqual("4.05");
  });
});
