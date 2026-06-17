
const fs = require('fs')
//                 módulo-fs       diretório  arquivo codificação 
const arquivo = fs.readFileSync(__dirname+'/festa.md','utf-8')
console.log(arquivo)