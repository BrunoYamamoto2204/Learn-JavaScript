// Escreva uma função que recebe 2 números e retorne o maior deles
function maiorNumero(n1, n2) {
    return n1 > n2 ? n1 : n2
}

const maiorNumero2 = (x,y) => x > y ? x : y

const n1 = 5;
const n2 = 4;

console.log("O maior número é: " + maiorNumero(n1,n2))