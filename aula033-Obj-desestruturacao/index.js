const pessoa = {
    nome: "Jonson",
    sobrenome: "Silva",
    idade: 20,
    endereco: {
        rua: "Av Brasil",
        numero: 320
    }
};

const {nome, sobrenome, endereco: {rua: r = 12345, numero}, endereco} = pessoa
console.log(nome, sobrenome,r,numero,endereco)

// Diferente de arrays, a desestruturação deve ter os mesmos nomes do obj
const {nome1, ...resto1} = pessoa;
console.log(nome1, resto1);