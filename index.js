const express = require('express')

const Container = require('./conteiner.js')
const app = express()
const totalProductos = new Container('./texto.json')

app.get('/', (req,res)=>{
    res.send('<h1> Pagina principal</h1>')
})

app.get('/productos', async (req,res)=>{
    let productos = await totalProductos.getAll()
    res.send(`<h1>${JSON.stringify(productos)}</h1>`)
})

app.get('/productoRandom', async(req,res)=>{
    let productos = await totalProductos.getAll()
    const aleatorio= productos[Math.floor(Math.random() * productos.length)];
    res.send(`<h1> ${JSON.stringify(aleatorio)}</h1>`)
})

const PORT = process.env.PORT || 8080
const server = app.listen(PORT, ()=>{
    console.log(`El servidor que se esta ejecutando es el ${PORT}`);
})

server.on("error", error => `Error: ${error}`)