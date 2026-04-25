import { createDrink, orderDrink, prepareOrder } from "../../src/coffeeshop";

describe("Coffee Shop Integration Test", () => {
  test("Should successfully complete full order flow of a latte order and return true", () => {
    const result = orderDrink("latte");
    expect(result).toBe(true);
  });
});
