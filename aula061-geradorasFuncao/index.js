function* geradora1 () {
    //Código qualquer ...
    yield "Valor 1";
    //Código qualquer ...
    yield "Valor 2";
    //Código qualquer ...
    yield "Valor 3";
}

const g1 = geradora1();

console.log(g1.next().value)
console.log();

for (let valor of g1){
    console.log(valor);
}

function* geradora2 () {
    let i = 0;

    while(true) {
        yield i;
        i++;
    }
}

const g2 = geradora2()

for (let i = 0; i < 5; i++) {
    console.log(g2.next().value);
}

// Tentar fazer fibonacci com geradora
function* fibonacci() {
    n1 = 1; 
    n2 = 0; 
    soma = 1
    
    while (true) {
        yield soma;
        n1 = n2 
        n2 = soma;
        soma = n1 + n2 
    }
}

console.log()
const g3 = fibonacci()
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);

