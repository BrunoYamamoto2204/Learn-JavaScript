const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];
const numerosFiltrados = numeros.filter((valor, indice, array) => valor > 10);
console.log(numerosFiltrados)

const pessoas = [
    { nome:"Luiz", idade: 62},
    { nome:"Maria", idade: 23},
    { nome:"Eduardo", idade: 55},
    { nome:"Letícia", idade: 19},
    { nome:"Rosana", idade: 32},
    { nome:"Wallace", idade: 47},

]

console.log()
const pessoaComNomeGrande = pessoas.filter(obj => obj.nome.length >= 6);
const maisDe50 = pessoas.filter(obj => obj.idade > 50)
const terminaComA = pessoas.filter(obj => obj.nome[obj.nome.length - 1].toLowerCase() === "a") // ou obj.nome.toLowerCase().endsWith("a")
console.log("Mais de 6 letras:")
console.log(pessoaComNomeGrande)

console.log("Mais de 50 anos:")
console.log(maisDe50)

console.log("Termina com A:")
console.log(terminaComA)

