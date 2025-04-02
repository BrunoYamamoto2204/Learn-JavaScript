function retornaFuncao (nome) {
    return function() {
        return nome;
    };
}

const funcao = retornaFuncao("Jonson");
const funcao2 = retornaFuncao("SILVA");
console.log(funcao());
console.log(funcao2());