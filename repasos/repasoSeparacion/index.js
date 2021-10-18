const express = require('express');
const routesAPIService = require('./rutas')

const app = express();
const port = 8080;

app.use(express.json());

app.get('/', (req, res) => {
  res.send("<h3>Hello this is Home</h3>");
})

routesAPIService(app);

app.listen(port, () => {
  console.log(`run server: http://localhost:${port}`)
});
