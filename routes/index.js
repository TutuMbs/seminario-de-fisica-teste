module.exports=(app)=>{
    var conexao = require('../config/database')
conexao()
    var mygrids = require('../models/mygrid')


    app.get('/', async(req, res) => {
        var mygrid = await mygrids.find().limit(6).sort({'_id':-1})
    
            
        res.render('index.ejs',{dados:mygrid})
            //console.log(mygrid)
    })

    app.post('/', (req, res) => {

        var documento = new mensagens({
                nome: req.body.first_name,
                sobrenome: req.body.last_name,
                email: req.body.email,
                mensagem: req.body.message
            })
            .save()
            .then(() => {
                res.redirect('/')
            })
            .catch(() => {
                res.send("Não foi possível gravar o documento no Banco de Dados")
            })
    })
}

