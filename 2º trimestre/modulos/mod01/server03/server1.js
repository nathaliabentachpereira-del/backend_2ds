const http = require('node:http')
const path = require('node:http')
const fs = require('node:fs')
const porta = 8005


const serve = http.createServer((req,res) => {
    // qual informação eu tenho?
    const urlTratada = new URL(req.url, `http://${req.headers.host}`)//limpeza de URL
    const recurso = urlTratada.pathname // em qual rota estamos?

    if(recurso === '/'){
        res.statusCode = 200
    res.setHeader('Content-Type','text/html; charset=utf-8')
    res.end('Bem vindo(a)! \nHomepage \\o/')
}else {
    res.statusCode = 401
    res.setHeader('Content-Type','text/plain; charset=utf-8')
    res.end('481 não autorrizado')
}
})

serve.listen(porta, ()=>{
    console.log(`servidor rodando na porta ${porta}`)
})