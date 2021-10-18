// import of modules
const express = require('express');
const data = require('./data');

// create data based
const dataProduct = new data();
dataProduct.createProduct(10)

// create app express
const app = express();

const port = 3000;

app.get('/', (req, res) => {
  res.send("este es el Home")
})

app.get('/products', (req, res) => {
  res.json(dataProduct)
})

app.get('/products/:id', (req, res) => {
  const id = req.params.id;
  if(id > 0 && id <11){
    res.json(dataProduct.products[id - 1])
  } else {
    res.send("No hay el product")
  }
})

// app.get('/users', (req, res) => {
//   res.json([
//     {
//       nombre: "User 1",
//       age: 34
//     },
//     {
//       nombre: "User 2",
//       age: 32
//     },
//     {
//       nombre: "User 3",
//       age: 25
//     },
//     {
//       nombre: "User 4",
//       age: 40
//     },
//     {
//       nombre: "User 5",
//       age: 27
//     }
//   ])
// })

app.get('/users', (req, res) => {
  const { limit, offset } = req.query;
  if(limit && offset) {
    res.json(
      {
        limit,
        offset
      }
    )
  } else {
    res.send("No hay los valoress...")
  }
})

app.listen(port, () => {
  console.log(`run server: http://localhost:${port}`)
});

