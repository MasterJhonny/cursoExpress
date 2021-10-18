// exportacion of modules
const express = require('express');
const ProductsService = require('../services/produtcs.service');

// instantiate of class
const router = express.Router();
const service = new ProductsService();

// peticion a products
router.get("/", (req, res) => {
  const products = service.find();
  res.status(200).json(products);
})


router.get('/filter', (req, res) => {
  res.send("I am a filter! yes!....")
})

router.get("/:id", (req, res) => {
  let id = req.params.id;
  const product = service.findOne(id);
  if(product) {
    res.status(200).json(product);
  } else {
    res.status(404).json({
      message: "Product not found"
    })
  }
})


router.post('/', (req, res) => {
  const body = req.body;
  const newProduct = service.create(body);
  res.status(201).json(newProduct);
})

router.patch('/:id', (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const updateProduct = service.update(id, body);
  res.status(200).json(updateProduct);
})

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  const deleteProduct = service.delete(id);
  res.status(200).json(deleteProduct);
})


module.exports = router;
