import products from '../data/products.js';

const getAllProducts = (req, res) => {
  res.json(products);
  // res.send('its working');
};

export { getAllProducts };
