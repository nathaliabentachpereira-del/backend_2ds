// setTimeout(ms) - executa 1 vez 
setTimeout(function(){
    console.log('executou timeout')
},3000)

let n = 0
// setInterval(ms) - executa 'x' vezes 
setInterval(function(){
    console.log(`executou FPS ${n}`)
        n = n+1
},2000)