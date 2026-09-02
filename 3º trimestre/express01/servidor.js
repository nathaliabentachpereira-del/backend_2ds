// importação moderna com ESM (import)
import express from 'express'

const app = express() //Instanciar Express

app.get('/',(req, res) => {
    res.send(`<h3>Página inicial <h/3>\n
        <p>Loja especializada em roupas</p>`)
})
app.get('/',(req, res) => {
    res.send('Minha roupa nova....!')
})

app.listen(3000, ()=> {console.log('Servidor está vivo')})