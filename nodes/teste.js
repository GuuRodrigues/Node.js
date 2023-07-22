const Sequelize = require('sequelize')
const sequelize = new Sequelize('sistemadecadastro', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(function(){
    console.log('Conectado com sucesso')
}).catch(function(erro){
    console.log('Falha ao se conectar: ' + erro)
})

//postagem
const Postagem = sequelize.define('postagens', {
    titulo:{
        type: Sequelize.STRING
    },
    conteudo:{
        type: Sequelize.TEXT
    }
})