const numeros = [1,2,3,4,5,6,7,8,9];

for (let numero of numeros) {

    // Pula o resto do for quando === 2
    if (numero === 2 || numero === 5){
        console.log("Pulei o número")
        continue;
    }

    // Sai do for quando === 7
    if (numero === 7){
        console.log("7 - Parei o bloco")
        break;
    }

    console.log(numero)
}