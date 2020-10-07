const computeTotalPrice = (arr) => {
  let newTotalPrice = 0;

  for (let el of arr) {
    newTotalPrice = newTotalPrice + el.totalPrice;
  }

  return newTotalPrice;
};

export { computeTotalPrice };
