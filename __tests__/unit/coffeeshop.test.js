import { createDrink, prepareOrder } from "../../src/coffeeshop";

describe("createDrink with a known type", () => {
  test("createDrink returns correct type and price", () => {
    const drink = createDrink("latte");
    expect(drink).toEqual({ type: "latte", price: 45 });
  });
});

describe("createDrink with a unknown type", () => {
  test("createDrink returns undefined price for unknown type", () => {
    const drink = createDrink("tea");
    expect(drink.price).toBeUndefined();
  });
});

describe("prepareOrder ticket number ", () => {
  test("prepareOrder returns a ticket number between 0 and 999", () => {
    const drink = createDrink("latte");
    const ticket = prepareOrder(drink);
    expect(ticket).toBeGreaterThanOrEqual(0);
    expect(ticket).toBeLessThan(1000);
  });
});
