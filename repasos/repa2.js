const express = require('express');

const app = express();

const port = 8000;


app.get('/', (req, res) => {
  res.send('<h2>Hola this is main!</h2><p>this is params</p>');
})

app.get('/products', (req, res)=> {
  res.json([
    {
      id: 1,
      nombre: "Product 1",
      precio: 234
    },
    {
      id: 2,
      nombre: "Product 2",
      precio: 223
    },
    {
      id: 3,
      nombre: "Product 3",
      precio: 123
    },
    {
      id: 4,
      nombre: "Product 4",
      precio: 423
    },
    {
      id: 5,
      nombre: "Product 5",
      precio: 312
    }
  ])
})

app.get('/products/:id', (req, res) => {
  const id = req.params.id;
  res.json({
    id,
    nombre: "Product 5",
    precio: 312
  });
})


app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json(
    {
      categoryId,
      productId
    }
  )
})

app.get('/users', (req, res) => {
  const { limit, offset } = req.query;
  if(limit && offset){
    res.json(
      {
        limit,
        offset
      }
    )
  } else {
    res.send("No hay nada!")
  }
})

app.listen(port)

console.log(`run sever: http://localhost:${port}`)
