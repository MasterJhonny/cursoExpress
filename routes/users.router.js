// export modules
const express = require('express');
const UsersService = require('../services/users.service');
const { createUserSchema, updateUserSchema, getUserSchema } = require('../schemas/user.schema');
const validatorHandler = require('../middlewares/validator.handler');

// create route
const router = express.Router();
const service = new UsersService();

// empoits
router.get("/", async (req, res) => {
  const users = await service.find();
  res.status(200).json(users);
})

// empoits
router.get('/:id',
  validatorHandler(getUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const id = req.params.id;
      const user = await service.findOne(id);
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }
)

router.post('/',
  validatorHandler(createUserSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const newUser = await service.create(body);
    res.status(201).json(newUser);
  }
)


router.patch('/:id',
  validatorHandler(getUserSchema, 'params'),
  validatorHandler(updateUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const id = req.params.id;
      const body = req.body;
      const updateUser = await service.update(id, body);
      res.status(200).json(updateUser);
    } catch (error) {

    }
  }
)

router.delete('/:id',
  validatorHandler(getUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const id = req.params.id;
      const deleteUser = await service.delete(id);
      res.json(deleteUser);
    } catch (error) {
      next(error);
    }
  }
)

module.exports = router;
