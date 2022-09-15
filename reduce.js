const carrito = [
  {
    name: "PC",
    price: 100,
  },
  {
    name: "Pantene",
    price: 25,
  },
  {
    name: "Mouse",
    price: 5,
  },
];

const functionCallback = (acumulador, element) => {
  return acumulador + element.price;
};

const balanceTotal = carrito.reduce(functionCallback, 0);

console.log(balanceTotal);
