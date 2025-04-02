function Pessoa(nome, sobrenome) {
    
    const ID = 12345
    const metodoInterno = function() {
        console.log(ID);
    }

    // Atributos ou métodos públicos
    this.nome = nome
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ": sou um método")
        metodoInterno();
    }
}
const p1 = new Pessoa("Jonson", "Silva");
p1.metodo()

const p2 = new Pessoa("Jabilson", "Pereira");
