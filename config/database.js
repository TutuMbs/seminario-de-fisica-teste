const mongoose = require('mongoose')

const user = 'user3tri'
const pw = 'user3tri'
const cluster = 'fiaptecnico.solkl.mongodb.net'
const db = 'html5up'

const conexao = async() => {
    //conexao local
    //var bdlocal = await mongoose.connect('mongodb://localhost/ac1tri')
    //conexao atlas
    var atlas = await mongoose.connect('mongodb+srv://TutuMbs:123@cluster0.mx6rm.mongodb.net/test')
}

const modelo = mongoose.Schema({
    estilos:String,
    imagem:String,
    titulo:String,
    texto:String,
    cadastradoem:{type:Date,default:Date.now}
})

const conteudo = mongoose.model('conteudo',modelo)

module.exports = {conteudo,conexao}
module.exports = conexao