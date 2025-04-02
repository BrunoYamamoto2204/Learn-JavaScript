const pessoa = {
    nome: "Jonson",
    sobrenome: "Silva",
    idade: 25
}

// console.log("Nome" + pessoa.nome)
// console.log("Sobrenome" + pessoa.sobrenome)
// console.log("Idade" + pessoa.idade)

function criaPessoa (nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade  
    }
}

// const pessoa1 = criaPessoa("Jonson", "Silva", 25)
// const pessoa2 = criaPessoa("Jabilson", "Santos", 35)
// const pessoa3 = criaPessoa("Max", "Verstappen", 27)
// const pessoa4 = criaPessoa("Lewis", "Hamilton", 40)
// const pessoa5 = criaPessoa("Lando", "Norris", 25)

// console.log(pessoa1.nome, pessoa2.nome)

const pessoa1 = {
    nome:"Jonson",
    sobrenome : "Silva",
    idade: 24,

    fala() {
        console.log(`A minha idade atual é ${this.idade}`);
    },

    incrementaIdade() {
        this.idade++;
    }
}

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();