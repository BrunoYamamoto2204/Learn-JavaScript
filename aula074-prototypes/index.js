// Função construtora 
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => "Original: " + this.nome + " " + this.sobrenome;
};
Pessoa.prototype.nomeCompleto = function (){
    this.nomeCompleto = () => this.nome + " " + this.sobrenome;
}

const pessoa1 = new Pessoa("Luiz", "O."); // <= Objetos instanciados
const pessoa2 = new Pessoa("Maria", "A."); // <= Objetos instanciados
const data = new Date(); // <= Objetos instanciados

console.log(pessoa1);
console.dir(pessoa1.estouAqui);
console.dir(pessoa2.estouAqui);

console.log();
console.log(Pessoa.prototype === pessoa1.__proto__)