const nomes = ["Jonson", "Silva"]

for (let valor of nomes) {
    console.log(valor)
}

console.log()

nomes.forEach(function(valor, indice, array){
    console.log(valor, indice, array);
});