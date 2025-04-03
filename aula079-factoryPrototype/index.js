
const falar = {
    falar () {
        console.log(`${this.nome} está falando.`)
    },
}

const comer = {
    comer () {
        console.log(`${this.nome} está comendo.`)
    },
}
const beber = {
    beber () {
        console.log(`${this.nome} está bebendo.`)
    },
}

// Junção das funções p/ o Prototype
const pessoaPrototype = { ...falar, ...comer, ...beber }

// Criar pessoa
function CriaPessoa(nome, sobrenome) {
    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    });
}

const p1 = CriaPessoa("Jonson", "Silva");
const p2 = CriaPessoa("Maria", "Silva");
console.log(p1.nome)
p2.falar()