export const addItemToCart = (item, next) => {
  let cart = [];
  if (typeof window !== undefined) {
    if (localStorage.getItem('cart')) {
      cart = JSON.parse(localStorage.getItem('cart'));
    }
    cart.push({
      ...item,
      count: 1,
    });
    localStorage.setItem('cart', JSON.stringify(cart));
    next();
  }
};

export const loadCart = () => {
  if (typeof window !== undefined) {
    if (localStorage.getItem('cart')) {
      let products = JSON.parse(localStorage.getItem('cart'));
      let newProducts = []
      for (let product of products) {
        let found = false
        for (let index in newProducts) {
          if (newProducts[index]['_id'] === product['_id']) {
            newProducts[index]['quantity'] = newProducts[index]['quantity'] + 1;
            found = true;
          }
        }
        if (!found) {
          let item = product;
          item['quantity'] = 1
          newProducts.push(item)
        }
      }
      return newProducts;
    }
  }
};

export const removeItemFromCart = (productId) => {
  let cart = [];
  if (typeof window !== undefined) {
    if (localStorage.getItem('cart')) {
      cart = JSON.parse(localStorage.getItem('cart'));
    }
    cart.map((product, i) => {
      if (product._id === productId) {
        cart.splice(i, 1);
      }
    });
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  return cart;
};

export const cartEmpty = (next) => {
  if (typeof window !== undefined) {
    localStorage.removeItem('cart');
    const cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    next();
  }
};
