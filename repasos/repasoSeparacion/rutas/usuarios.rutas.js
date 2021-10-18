const express = require('express');
const faker = require('faker');
const { get } = require('./productos.rutas');

const router = express.Router();

function Data (count) {
  this.users = new Array();
  for(let i = 0; i < count; i++) {
    this.users.push(
      {
        id: i + 1,
        nombre: faker.name.firstName(),
        address: faker.address.cityName()
      }
    )
  }
}


const usersData = new Data(30);

router.get('/', (req, res) => {
  const emp = req.query.emp;
  if(emp){
    res.json(usersData.users.filter(item => item.address.substr(0,1) === emp.toUpperCase()));
  } else {
    res.json(usersData);
  }
})

router.get('/', (req, res) => {
  res.json(usersData);
})

router.get('/:id', (req, res) => {
  const id = req.params.id;
  res.json(usersData.users[id - 1]);
})

router.post('/', (req, res) => {
  const body = req.body;
  res.json({
    message: "Created",
    body: body
  })
})



module.exports = router;
