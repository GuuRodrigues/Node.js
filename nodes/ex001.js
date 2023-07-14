const express = require('express')
const app = express()

app.get('/', function(req, res){
    res.send('Seja bem-vindo ao meu app')
})

app.listen(8081, function(){
    console.log('Servido rodando!')
})