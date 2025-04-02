function criaPessoa(nome, sobrenome) {
    return {nome, sobrenome};
}

const p1 = criaPessoa("Jabilson", "Pereira");
const p2 = {
    nome:"Jonson",
    sobrenome: "Silva"
};

console.log(p1);
console.log(p2);
console.log();

function falaFrase(comeco) {
    function falaResto (resto) {
        return comeco + " " + resto;
    }
    return falaResto
}

const fala = falaFrase("Olá");
const resto = fala("mundo!");
console.log(resto)

console.log();

function criaMultiplicador (multiplicador) {
    return function(n) {
        return n * multiplicador;
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(3));
console.log(triplica(2));
console.log(quadriplica(10));
console.log();

function criaMultiplicador2 (multiplicador) {
        return function(n) {
            return function (n2) {
                return n * n2 * multiplicador
            };
        };
    }
    
    const duplica2 = criaMultiplicador2(2);
    const duplica3 = duplica2(3);

    console.log(duplica3(2)) // Resultado 12 (2 * 2 * 3)
