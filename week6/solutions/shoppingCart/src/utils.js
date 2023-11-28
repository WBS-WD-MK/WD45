export const decrease = (cart, product) => {
  // return new array
  // dont forget to [...cart]
  // check if you have the product and its not 0 then decrease it otherwise remove the product from the cart
  console.log(`Decrease product with sku ${product.sku}`);
};

export const increase = (cart, product) => {
  // check if you have the product in the cart if yes then increase the qty otherwise add a new product to the cart and set the qty:1
  // return new array
  // dont forget to [...cart]
  // {...product,qty:1}
  console.log(`Increase product with sku ${product.sku}`);
};

export const getTotalPrice = cart => {
  return cart
    .reduce((acc, currentProduct) => {
      acc += currentProduct.qty * currentProduct.price;
      return acc;
    }, 0)
    .toFixed(2);
};

export const getTotalItems = cart => {
  return cart.reduce((acc, currentProduct) => {
    acc += currentProduct.qty;
    return acc;
  }, 0);
};
