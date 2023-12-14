const express = require('express');
const { v4: uuidv4 } = require('uuid');
const app = express();
const port = process.env.PORT || 8000;

let products = [
  {
    id: uuidv4(),
    name: 'product 1',
    price: 10,
    quantity: 20,
  },
  {
    id: uuidv4(),
    name: 'product 2',
    price: 5,
    quantity: 10,
  },
  {
    id: uuidv4(),
    name: 'product 3',
    price: 14,
    quantity: 2,
  },
];
app.use(express.json());
app.get('/api/products', (req, res) => {
  const { minPrice, maxPrice, query } = req.query;
  // console.log(minPrice, maxPrice);
  let result = [...products];
  if (query) {
    console.log(query);
    result = products.filter(p => {
      console.log(p.name.toLowerCase(), p.name.toLowerCase() === query.toLowerCase());
      return p.name.toLowerCase() === query.toLowerCase();
    });
  }

  if (minPrice && maxPrice) {
    result = products.filter(p => p.price >= minPrice && p.price <= maxPrice);
  } else if (minPrice) {
    result = products.filter(p => p.price >= minPrice);
  } else if (maxPrice) {
    result = products.filter(p => p.price <= maxPrice);
  }
  res.json(result);
});
app.get('/api/products/:id', (req, res) => {
  const id = req.params.id;
  const product = products.find(p => p.id === id);
  if (!product) {
    res.status(404).json({ message: `Product with id ${id} Not Found!` });
  }
  res.json(product);
});

app.post('/api/products', (req, res) => {
  const product = { ...req.body, id: uuidv4() };
  products.push(product);
  res.status(201).json(product);
});
app.put('/api/products/:id', (req, res) => {
  const id = req.params.id;
  const { name, price, quantity } = req.body;
  const product = products.find(p => p.id === id);
  if (!product) {
    res.status(404).json({ message: `Product with id ${id} Not Found!` });
  }
  // product.name = name;
  // product.price = price;
  // product.quantity = quantity;
  const productIndex = products.findIndex(p => p.id === id);
  products[productIndex] = { ...products[productIndex], ...req.body };
  res.json(products[productIndex]);
});
app.delete('/api/products/:id', (req, res) => {
  const id = req.params.id;
  const product = products.find(p => p.id === id);
  if (!product) {
    res.status(404).json({ message: `Product with id ${id} Not Found!` });
  }
  products = products.filter(p => p.id !== id);
  res.json(product);
});

app.listen(port, () => {
  console.log(`Example app listening on  http://localhost:${port}`);
});
