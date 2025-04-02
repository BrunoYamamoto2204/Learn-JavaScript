const souUmDado = function() {
    console.log("Sou um dado.");
}

function executaFuncao(funcao) {
    console.log("Vou executar sua função abaixo:")
    funcao();
}

executaFuncao(souUmDado)

const funcaoArrow = (param) => {
    console.log(`\nSou uma arrow function: ${param}`);
}
funcaoArrow("salve")

const obj = {
    falar: function() {
        console.log("Eu estou falando...")
    }
}

obj.falar();