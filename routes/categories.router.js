// imports of Modules
const express = require('express');
const CategoriesService = require('../services/categories.service');
const { createCategorySchema, updateCategorySchema, getCategorySchema } = require('../schemas/category.schema');
const validatorHandler = require('../middlewares/validator.handler');

// instace of class
const router = express.Router();
const service = new CategoriesService();

// routing
router.get("/", async (req, res) => {
  const categories = await service.find();
  res.status(200).json(categories);
})


router.get('/:id',
  validatorHandler(getCategorySchema, 'params'),
  async (req, res, next) => {
    try {
      const id = req.params.id;
      const category = await service.findOne(id);
      res.status(200).json(category);
    } catch (error) {
      next(error);
    }
  }
)

router.post('/',
  validatorHandler(createCategorySchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const newCategory = await service.create(body);
    res.status(201).json(newCategory);
  }
)

router.patch('/:id',
  validatorHandler(getCategorySchema, 'params'),
  validatorHandler(updateCategorySchema, 'body'),
  async (req, res, next) => {
    try {
      const id = req.params.id;
      const body = req.body;
      const updataCategory = await service.update(id, body);
      res.status(200).json(updataCategory);
    } catch (error) {
      next(error);
    }
  }
)

router.delete('/:id',
  validatorHandler(getCategorySchema, 'params'),
  async (req, res, next) => {
    try {
      const id = req.params.id;
      const deleteCategory = await service.delete(id);
      res.status(200).json(deleteCategory);
    } catch (error) {
      next(error);
    }
  }
)

module.exports = router;
