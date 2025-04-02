const nome = "Jonson"
const sobrenome = "Silva"
const idade = 30
const peso = 70
const alturaEmM = 1.80
let imc = peso / (alturaEmM*alturaEmM)
let anoNascimento = 2025 - 30

console.log(`Nome: ${nome} ${sobrenome}`)
console.log("Idade: " + idade)
console.log("IMC:", imc.toFixed(2))
console.log("Ano de nascimento: " + anoNascimento)

