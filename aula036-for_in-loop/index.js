const frutas = ["Pera", "Maçã", "Uva"];

for (let i in frutas) {
    console.log(frutas[i]);
}

console.log()

const pessoa = {
    nome: "Jonson",
    sobrenome: "Silva",
    idade: 30
};

for (let chave in pessoa) {
    console.log(chave, pessoa[chave])
}