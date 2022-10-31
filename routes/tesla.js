module.exports = (app)=>{
    app.get('/tesla',(req,res)=>{
        res.render('tesla.ejs')
    })
}