const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().min(3).max(16);
const address = Joi.string().min(3).max(37);
const avatar = Joi.string().uri();

const createUserSchema = Joi.object({
  name: name.required(),
  address: address.required(),
  avatar: avatar.required()
});

const updateUserSchema = Joi.object({
  name: name,
  address: address,
  avatar: avatar
})


const getUserSchema = Joi.object({
  id: id.required()
})


module.exports = { createUserSchema, updateUserSchema, getUserSchema };
