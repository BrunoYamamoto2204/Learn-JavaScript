const numero = 10;

if (numero <= 10) { 
    console.log("O número é menor ou igual a 10")
}


if (numero >= 0 && numero <= 5) {
    console.log("O número está entre 0 e 5");
}
else if (numero >= 6 && numero <= 8) { // else if só executa o 1a if e sai 
    console.log("O número está entre 6 e 8");
}
else if (numero >= 9 && numero <= 11) {
    console.log("O número está entre 9 e 11");
}
else {
    console.log("O nímero está entre 0 e 11")
}