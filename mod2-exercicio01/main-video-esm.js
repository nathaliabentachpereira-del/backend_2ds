// usamos o * para dizer que estamos
// importanto TUDO de um arquivo 
// o termo "as" permite criar um apelido 

import * as netflix from './videos-esm.js'

console.log(netflix.alugarFilme('HomemAranha','31/06','50,00'))
