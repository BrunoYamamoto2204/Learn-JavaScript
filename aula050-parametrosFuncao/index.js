function funcao() {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total);
}
funcao(1,2,3,4,5)

function soma(a, b = 2) {
    console.log(a + b)
}
soma(2);
console.log()

function conta(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if (operador === "+") acumulador += numero;
        if (operador === "-") acumulador -= numero;
        if (operador === "/") acumulador /= numero;
        if (operador === "*") acumulador *= numero;
    }
    console.log(acumulador)
}
conta("*", 1, 20, 30, 40, 50);