// Objetos
const pessoa1 = new Object()
pessoa1.nome = "Jonson",
pessoa1.sobrenome = "Silva"
pessoa1.idade = 19;

pessoa1.falarNome = function() {
    console.log(`${this.nome} está falando seu nome.`)
}
pessoa1.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};

// Resultado do object 
pessoa1.falarNome();
console.log(pessoa1.getDataNascimento());

console.log()
for (let chave in pessoa1) {
    console.log(pessoa1[chave]);
}

// Factory Functions
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto () {
            return `${this.nome} ${this.sobrenome}`
        }
    };
}

console.log()
const p1 = criaPessoa("Jonson","Silva");
console.log(p1.nomeCompleto);

// Constructor functions 
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

console.log();
const p2 = new Pessoa("Jonson","Silva")
console.log(p2);