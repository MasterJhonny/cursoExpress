const express = require('express');

const app = express();

const port = 3434;


app.get('/', (req, res) => {
  res.send('<h1>Welcome!</h1><p>this is server whit express!</p>');
})

app.get('/home', (req, res) => {
  res.send('<h1>Home</h1><p>this is the Home</p>')
})

app.get('/product', (req, res) => {
  res.json([
    {
      nombre: "Product 1",
      precio: 234
    },
    {
      nombre: "Product 2",
      precio: 223
    },
    {
      nombre: "Product 3",
      precio: 123
    },
    {
      nombre: "Product 4",
      precio: 423
    },
    {
      nombre: "Product 5",
      precio: 312
    }
  ])
})

app.get('/categories', (req, res) => {
  res.json([
    {
      nombre: "Category 1",
      cantidad: 234
    },
    {
      nombre: "Category 2",
      cantidad: 223
    },
    {
      nombre: "Category 3",
      cantidad: 123
    },
    {
      nombre: "Category 4",
      cantidad: 423
    },
    {
      nombre: "Category 5",
      cantidad: 312
    }
  ])
})

app.get('/users', (req, res) => {
  res.json([
    {
      nombre: "User 1",
      age: 34
    },
    {
      nombre: "User 2",
      age: 32
    },
    {
      nombre: "User 3",
      age: 25
    },
    {
      nombre: "User 4",
      age: 40
    },
    {
      nombre: "User 5",
      age: 27
    }
  ])
})

app.get('/categories/:id', (req, res) => {
  const id = req.params.id;
  res.json(
    {
      id,
      nombre: `Category ${id}`,
      cantidad: 312
    }
  )
})

app.get('/product/:id', (req, res) => {
  const id = req.params.id;
  res.json(
    {
      id,
      nombre: `Product ${id}`,
      precio: 390
    }
  )
})

app.get('/users/:id', (req, res) => {
  const id = req.params.id;
  res.json(
    {
      id,
      nombre: `User ${id}`,
      age: 27
    }
  )
})

app.get('/categories/:categoryId/product/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json(
    {
      categoryId,
      productId
    }
  )
})

app.get('/users/:userId/categories/:categoryId/product/:productId', (req, res) => {
  const { userId, categoryId, productId } = req.params;
  res.json(
    {
      userId,
      categoryId,
      productId
    }
  )
})

app.listen(port, () => {
  console.log(`run server:  http://localhost:${port}`);
})
