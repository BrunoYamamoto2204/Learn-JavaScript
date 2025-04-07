export const nome = "Jonson";
export const sobrenome = "Silva";
export const idade = 30;

function soma(x, y) {
    return x + y;
}

export default class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome
    }
}