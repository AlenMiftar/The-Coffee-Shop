const createDrink = (type) => {
  const menu = { latte: 45, espresso: 30, cappuccino: 50 };
  return { type, price: menu[type] };
};

const prepareOrder = (drink) => {
  console.log(`Prepering ${drink.type}...`);
  const tickerNumber = Math.floor(Math.random() * 1000);
  return tickerNumber;
};

const processPayment = (ticketNumber, amount) => {
  if (!ticketNumber) {
    throw new Error("No ticker number provided");
  }
  console.log(`Payment of ${amount} recieved for ticket #${ticketNumber}`);
  return true;
};

const orderDrink = (drinkType) => {
  const drink = createDrink(drinkType);
  const ticketNumber = prepareOrder(drink);
  const paymentStatus = processPayment(ticketNumber, drink.price);
  return paymentStatus;
};

export { createDrink, prepareOrder, processPayment, orderDrink };
