const express = require('express');
const server = express();
const bodyParser = require('body-parser');

server.use(bodyParser.json());

let lista = [
    {"id":1,"nome":"Glauber", "login" : "glauberc" ,"email":"glauber@teste.br"},
    {"id":2,"nome":"Matheus", "login" : "matheus","email":"matheus@teste.br"}
]

server.post('/usuarios', (req, res) => {
    lista.push(req.body);
    res.send(lista);
})
server.get('/', (req, res)=>{
    res.send('<h1>home</h1>')
})

server.get('/usuarios', (req,res) =>{
    res.send(lista);
})
server.listen(3001, ()=>{
    console.log('Servidor na porta 3001')
})