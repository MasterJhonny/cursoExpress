const express = require('express');
const productsRouter = require('./productos.rutas');
const categoriesRouter = require('./categorias.rutas');
const usersRouter = require('./usuarios.rutas');

function routesAPIService(app) {
  const router = express.Router();
  app.use('/api/v1', router)
  router.use('/products', productsRouter)
  router.use('/categories', categoriesRouter)
  router.use('/users', usersRouter)
}

module.exports = routesAPIService;
