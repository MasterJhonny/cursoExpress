const express = require('express');
const faker = require('faker');

const router = express.Router();

function Data (count) {
  this.categorias = new Array();
  for(let i=0; i< count; i++) {
    this.categorias.push(
      {
        id: i + 1,
        nombre: faker.commerce.department(),
        class: faker.commerce.productAdjective()
      }
    )
  }
}

const categoriesData = new Data(4);

router.get('/', (req, res) => {
  res.status(200).json(categoriesData)
})

router.get('/:id', (req, res) => {
  const id = req.params.id;
  if(id > 0 && id <= categoriesData.categorias.length) {
    res.status(200).json(categoriesData.categorias[id - 1])
  } else {
    res.status(404).json({
      message: "not found!"
    })
  }
})

router.post('/', (req, res) => {
  const body = req.body;
  res.status(201).json({
    message: "Created",
    body: body
  })
  categoriesData.categorias.push(body)
})

router.put('/:id', (req, res) => {
  const body = req.body;
  const id = req.params.id;
  res.status(201).json({
    message: "Updated",
    body
  })
  categoriesData.categorias[id - 1] = {
    ...categoriesData.categorias[id - 1],
    ...body
  }
})

router.patch('/:id', (req, res) => {
  const id = req.params.id;
  const body = req.body;
  res.status(201).json({
    message: "Update Parcial",
    body,
    id
  })
  categoriesData.categorias[id - 1] = {
    ...categoriesData.categorias[id - 1],
    ...body
  }
})

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  let item = categoriesData.categorias.splice(id - 1, 1);
  res.json({
    message: "Delete",
    body: item
  })

})

module.exports = router;
