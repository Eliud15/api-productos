const express = require('express');
const app = express();
const cors = require('cors')
const path = require('path')
const { productos } = require('./productos')
app.use(cors())
app.get('/', (req, res) => res.send(path(__dirname,'index.html')))
app.get('/productos', (req, res) => res.send(JSON.stringify(productos)))
app.get('/camisas', (req, res) => res.send(JSON.stringify(productos.Camisas)))
app.get('/pantalones', (req, res) => res.send(JSON.stringify(productos.Pantalones)))
app.get('/reloj', (req, res) => res.send(JSON.stringify(productos.Reloj)))
app.get('/electrodomesticos', (req, res) => res.send(JSON.stringify(productos.Electrodomesticos)))
app.get('/celulares', (req, res) => res.send(JSON.stringify(productos.Celulares)))

app.listen(5000, () => console.log('El servidor se esta ejecutando👍'))

/*    `<center><h1>Bienvenido a products api</h1></center>
<hr>
<h2>Productos:<a href="/productos">/Productos</a><h2/><br>
<h2>Relojes:<a href="/reloj">/Reloj</a><h2/>
<br>
<h2>Celulares:<a href="/celulares">/Celulares</a><h2/>
<br>
<h2>Camisas:<a href="/camisas">/Camisas</a><h2/>
<br>
<h2>Pantalones:<a href="/pantalones">/Pantalones</a><h2/>
<br>
<h2>Electrodomesticos:<a href="/electrodomesticos">/Electrodomesticos</a><h2/>
`*/