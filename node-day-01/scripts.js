
// const http = require('http');//import required são "equivalentes "

// const hostname = '127.0.0.1';
// const port = 3000;

// // const server = http.createServer((req, res) => {
// //   res.statusCode = 200;
// //   res.setHeader('Content-Type', 'text/plain');
// //   res.end('Hello World');
// // });

// // server.listen(port, hostname, () => {
// //   console.log(`Server running at http://${hostname}:${port}/`);
// // });

// const fs = require('fs')
// console.log('Primeiro comando.')

// fs.readFile('./text.txt', callback)

// function callback(err, content){
//     if (err) return console.error('erro')
//     console.log(String(content))//converter para string 
// }
// console.log('Segundo comando.')
// console.log('Terceiro comando.')
// //utilizando programaçãp assiclona

// setTimeout (()=> (console.log('testando a função')), 3000)
// // setTimeout(myFunction, 3000)//milissegundo
// // function myFunction (){
// //     console.log('testando a função')
// // }
console.log('comando que está após setTimeout')


function tempoAtual (){
    const date = new Date()
    const hora = date.getHours()
    const minuto = date.getMinutes()
    const segundo = date.getSeconds();

    const stringTempoAtual = `A hora é ${hora}, o minuto é  ${minuto} e o segundo é ${segundo}`
    console.log(stringTempoAtual)
    return stringTempoAtual
}


setTimeout(tempoAtual, 5000)
setTimeout(tempoAtual, 5000)
setTimeout(tempoAtual, 5000)

//o time do setTimeout iniciou praticamente ao mesmo tempo para as 3 chamadas

//Isso provavelmente acontece porque ele ocorre de maneira assincrona

setInterval(tempoAtual, 5000)
//a primeira execução aconteceu junto as demais contanto o tempo a partir de então


