// const os = require('node:os')
const os = require('os')
const log = require('./logger') //modular
// let oi = os.cpus()
const {freemem, totalmem} = os
// console.log(freemem+' '+totalmem) mistério

// console.log(`${parseInt((freemem()/1024/1024))} ${parseInt((totalmem()/1024/1024))}`)
setInterval(()=>{
    const total = parseInt(totalmem()/1024/1024)
    const freeMem = parseInt((freemem()/1024/1024))
    const usage = total - freeMem
    const percents = parseInt(usage/total*100)
    const stats = {
        total: `${total} MB`,
        freeMem: `${freeMem} MB`,
        percents: `${percents}% em uso`
    }
    console.clear()
    console.log('++++++ MEMORY STATS ++++++')
    //boa prática comentar o que foi criada inserir aqui o que é log porque recebe dois parametros
    console.table(stats)//transformar para texto no caso um json no documento não aguenta
    log('Rodando', JSON.stringify(stats)) //carrega a/as função/oes que foram exportadas nessse módulo
}, 1000)



