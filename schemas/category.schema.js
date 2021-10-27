const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().min(3).max(30);
const isClass = Joi.string().min(5).max(40)

const createCategorySchema = Joi.object({
  name: name.required(),
  isClass: isClass.required()
});

const updateCategorySchema = Joi.object({
  name: name,
  isClass: isClass
});

const getCategorySchema = Joi.object({
  id: id.required()
});


module.exports = { createCategorySchema, updateCategorySchema, getCategorySchema };
