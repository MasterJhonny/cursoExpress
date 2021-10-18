const express = require('express');
const ProductsService = require('../services/products.sevice');
const router = express.Router();

const service = new ProductsService();

router.get('/', (req, res) => {
  const products = service.find();
  const { bajo, alto } = req.query;
  if(bajo && alto) {
    res.status(200).json(products.filter(item => item.price > parseInt(bajo) && item.price < parseInt(alto)));
  }
  res.status(200).json(products);
})

router.get('/:id', (req, res) => {
  const id = req.params.id;
  const product = service.findOne(id);
  if(product) {
    res.status(200).json(product);
  } else {
    res.status(404).json({
      message: 'Not Found'
    });
  }
})

router.post('/', (req, res) => {
  const body  = req.body;
  res.status(201).json({
    message: 'Created',
    body: body,
  })
  products.push(body);
})


module.exports = router;


