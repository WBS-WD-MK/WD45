export const decrease = (cart, product) => {
  return cart.filter(cartProduct => {
    if (cartProduct.sku === product.sku) {
      cartProduct.qty--; // obj.qty = obj.qty - 1
      if (cartProduct.qty === 0) {
        return false;
      }
    }
    return true;
  });
};

export const increase = (cart, product) => {
  if (cart.find(p => p.sku === product.sku)) {
    // return cart.map(p => (p.sku === product.sku ? { ...p, qty: p.qty + 1 } : p));
    return cart.map(p => {
      if (p.sku === product.sku) {
        return { ...p, qty: p.qty + 1 };
      } else {
        return p;
      }
    });
  } else {
    const newProduct = { ...product, qty: 1 };
    return [...cart, newProduct];
  }
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
