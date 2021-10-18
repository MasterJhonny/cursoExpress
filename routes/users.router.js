// export modules
const express = require('express');
const UsersService = require('../services/users.service');

// create route
const router = express.Router();
const service = new UsersService();

// empoits
router.get("/", (req, res) => {
  const users = service.find();
  res.status(200).json(users);
})

// empoits
router.get('/:id', (req, res) => {
  const id = req.params.id;
  const user = service.findOne(id);
  if(user){
    res.status(200).json(user);
  } else {
    res.status(404).json({
      message: 'Not Found'
    });
  }
})

router.post('/', (req, res) => {
  const body = req.body;
  const newUser = service.create(body);
  res.status(201).json(newUser);
})


router.patch('/:id', (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const updateUser = service.update(id, body);
  res.status(200).json(updateUser);
})

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  const deleteUser = service.delete(id);
  res.json(deleteUser);
})

module.exports = router;
