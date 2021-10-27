// exportacion of modules
const express = require('express');
const ProductsService = require('../services/produtcs.service');
const { createProductSchema, getProductSchema, updateProductSchema } = require('../schemas/product.schema');
const validatorHandler = require('../middlewares/validator.handler');

// instantiate of class
const router = express.Router();
const service = new ProductsService();

// peticion a products
router.get("/", async (req, res) => {
  const products = await service.find();
  res.status(200).json(products);
})


router.get('/filter', async (req, res) => {
  res.send("I am a filter! yes!....")
})

router.get("/:id",
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
    let id = req.params.id;
    try {
      const product = await service.findOne(id);
      res.status(200).json(product);
    } catch (error) {
      next(error);
    }
  }
)


router.post('/',
  validatorHandler(createProductSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const newProduct = await service.create(body);
    res.status(201).json(newProduct);
  }
)

router.patch('/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req, res, next) => {
    try {
      const id = req.params.id;
      const body = req.body;
      const updateProduct = await service.update(id, body);
      res.status(200).json(updateProduct);
    } catch (error) {
      next(error);
    }
  }
)

router.delete('/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
    try {
      const id = req.params.id;
      const deleteProduct = await service.delete(id);
      res.status(200).json(deleteProduct);
    } catch (error) {
      next(error);
    }
  }
)


module.exports = router;
