const express = require('express');
const routerApi = require('./routes')
const app = express();
const port = 8080;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hola, este es mi sevidor con express!")
})

app.get("/home", (req, res) => {
  res.send(`
    <h1>Home</h1>
    <p>lorem Ips this ios page home and this fance kjhdf  asdfjk</p>
  `)
})

routerApi(app);

app.listen(port, ()=> {
  console.log(`Servidor corriendo: http://localhost:${port}`)
})

