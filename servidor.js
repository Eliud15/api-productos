const express = require('express');
const app = express();
const cors = require('cors')
const path = require('path')
app.use(express.static(__dirname + '/public'));
const { productos } = require('./productos')
app.use(cors())

app.get('/', (req, res) => res.sendFile(path.resolve(__dirname,'index.html')))
app.get('/productos', (req, res) => res.send(JSON.stringify(productos)))
app.get('/camisas', (req, res) => res.send(JSON.stringify(productos.Camisas)))
app.get('/pantalones', (req, res) => res.send(JSON.stringify(productos.Pantalones)))
app.get('/reloj', (req, res) => res.send(JSON.stringify(productos.Reloj)))
app.get('/electrodomesticos', (req, res) => res.send(JSON.stringify(productos.Electrodomesticos)))
app.get('/celulares', (req, res) => res.send(JSON.stringify(productos.Celulares)))

const port = process.env.PORT || 5000
app.listen(port, () => console.log('El servidor se esta ejecutando👍'))

