// First calculate the total cost of the pizza including tax
const calcTotalWithTax = (pizzaCost) => pizzaCost * 1.2;

// Calculate the cost of pizza for two people
const costForTwo = (itemCost) => Math.round((itemCost / 2) * 100) / 100;

// Each pizza cost ...
const pizzaValue = 25;

// implement pipe function
// the pipe function accepts any operations
// return a function that packages all
// operations into a single operation (Curry pattern)
// first we invoke op1 with the passed

const pipe = (...options) => (value) =>
  options.reduce((previousValue, func) => func(previousValue), value); // Functor curring single value and cascading values one after other

const splitTotalCost = pipe(calcTotalWithTax, costForTwo); // will return single value
console.log(
  `$${pizzaValue} pizza (plus tax), would cost ${splitTotalCost(
    pizzaValue
  )} between two people`
);
