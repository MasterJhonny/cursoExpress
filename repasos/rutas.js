const express = require('express');

const app = express();

const port = 8080

app.get("/", (req, res) => {
  res.send('Hola seste es mmy server con express!')
})

app.get("/cursos", (req, res) => {
  res.send('Estos son los cursos!')
})

//app.use(express.static(path.join(__dirname + "/index.html")))

app.get("/product", (req, res) => {
  res.json({
    "arrayColores":[{
            "nombreColor":"rojo",
            "valorHexadec":"#f00"
        },
        {
            "nombreColor":"verde",
            "valorHexadec":"#0f0"
        },
        {
            "nombreColor":"azul",
            "valorHexadec":"#00f"
        },
        {
            "nombreColor":"cyan",
            "valorHexadec":"#0ff"
        },
        {
            "nombreColor":"magenta",
            "valorHexadec":"#f0f"
        },
        {
            "nombreColor":"amarillo",
            "valorHexadec":"#ff0"
        },
        {
            "nombreColor":"negro",
            "valorHexadec":"#000"
        }
    ]
})
})


app.get("/product/:id", (req, res) => {
  let { id } = req.params;
  res.json({
    id,
    "nombreColor":"rojo",
    "valorHexadec":"#f00"
})
})

app.get("/cat/:catId/product/:proId", (req, res) => {
  let { catId, proId } = req.params;
  res.json({
    catId,
    proId
  })
})

app.listen(port, () => {
  console.log(`listening on port: http://localhost:${port}`)
})
