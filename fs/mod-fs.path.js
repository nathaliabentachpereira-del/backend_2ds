
const fs = require('fs')
const path = require('path')
const chalk = require('chalk').default

try {
    //                 módulo-fs       diretório  arquivo codificação 
    const arquivo = fs.readFileSync(path.join(__dirname + '/festa.md'), 'utf-8')
    console.log(chalk.green('arquivo arquivo carregado com sucesso!'))
    console.log(arquivo)

} catch (erro) {
    console.log( chalk.bgYellowBright.red(' atenção erro a frente'))
    console.log(chalk.blue.bg)
}

