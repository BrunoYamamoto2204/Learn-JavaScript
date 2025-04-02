const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];
const removidos = numeros.splice(9, 12)
console.log(numeros, removidos)

const numerosFiltrados = numeros.filter((valor, indice, array) => valor >= 7);
console.log()
console.log(numerosFiltrados)

const numerosFiltrados2 = numerosFiltrados.map((valor, index, array) => valor * 2);
console.log()
console.log(numerosFiltrados2)

const numerosFiltrados3 = numerosFiltrados2.reduce((acumulador,valor, indice, array) => acumulador += valor);
console.log()
console.log(numerosFiltrados3)