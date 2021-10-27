const express = require('express');
const routerApi = require('./routes');
const cors = require('cors');
const { logError, errorHandler, errorHandlerBoom } = require('./middlewares/errores.handler');

const app = express();
const port = 8080;

// para que se las reppuestas puedan expresarse en json
app.use(express.json());
// habilita for que se pueda acceder a la api desce cualquier mydominio, pero podemos limitarlo
const whitelist = ['http://127.0.0.1:5500'];
const options = {
  origin: (origin, callback) => {
    if(whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Ups, Permission denied'));
    }
  }
}
app.use(cors(options));

app.get("/", (req, res) => {
  res.send("Hola, este es mi sevidor con express!")
})

app.get("/home", (req, res) => {
  res.send(`
    <h1>Home</h1>
    <p>lorem Ips this ios page home and this fance kjhdf  asdfjk</p>
  `)
})

// las ruoter
routerApi(app);

// aplication de los midewors
app.use(logError);
app.use(errorHandlerBoom);
app.use(errorHandler);

// puerto en que se listem the server.
app.listen(port, ()=> {
  console.log(`Servidor corriendo: http://localhost:${port}`)
})

