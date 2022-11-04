//Overview de JavaScript

//console
console.log('texto')//tanto faz aspas duplas e simples deve seguir o padrão a crase é em literais
console.error('Essa é uma mensagem de erro ...') 
console.warn('Isso é um alerta')

// variáveis

let x = 10
if(true){
    let x = 20
    console.log(x)
}

//tipos de dados
// string

const name = 'Juliana'
console.log(name)
console.log(typeof name)

//number

let n = 10
console.log(n)
console.log(typeof n)

n = 15.99

console.log(n)
console.log(typeof n)

//inteiro e flutuante são visto como a mesma coisa no javascript

//bool
//para variável do tipo booleano existe uma boa prática de nomeclatura começa com is, 
//outro padrão primeira lepra minuscula e segunda maiuscula
const isOpen = true // o numero 1 é true e 0 é false pode ser usado no if
console.log(isOpen)
console.log(typeof isOpen)

//null
const a = null
console.log(a)
console.log(typeof a)

//qualquer variável do javascript pode ser considerado um objeto não tem método mas tem propriedades

//underfined
//se não coloca nada virá isso underfined se deixar sem atribuir valor , erro trevoso
let nada
console.log(nada)
console.log(typeof nada)

//array
const linguagens = ['C++',50,'Python','JS'] //começa no zero, toda string em JavaScript e um Array
// é um vetor não precisa escolher o tipo, logo posso ter vetor de varios tipos diferentes
console.log(linguagens[1])
console.log(typeof linguagens[1])

//object literals
const user = { 
    username:'vrc',
    password: '123',
    age:31,
    name:'Victor'
}
console.log(user)
console.log(typeof user)

// métodos de String

const text = 'qualquer um'
console.log(text)
console.log(text.length)
//quebrar texto em um conjunto de caracteres
const textToArray = text.split(' ')
console.log(textToArray[0]) //se aparecer undefined é porque ta acessado um indice não inserido
console.log(text.toLocaleUpperCase())//se não colocar () aós a função ele só informa que isso é uma função
//procurar algo dentro de uma string se não achar retorna -1
//procurar algo na string
console.log(text.indexOf('abc'))
console.log(text.charAt(text.length - 1))
console.log(text.charAt(0))
console.log(text.slice(2,4))

//mais sobre arrays
const chars = ['AAA', 'B', 'C', 'D', 88]
console.log(chars.length)
console.log(chars[chars.length - 1])
//push F inserir o F fim
//pop Retira o Ultimo
//push F inserir o F fim
//pop Retira o Ultimo
//unshift F inserir o F fim
//shift Retira o Ultimo
chars[5] = 'F'
console.log(chars)
chars.pop()
chars.pop()
chars.pop()
chars.pop()
chars.pop()
chars.unshift('B')
console.log(chars)
