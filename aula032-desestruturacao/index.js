const numeros = [1000,2000,3000,4000,5000,6000,7000,8000,9000]

const [um, dois, tres, ...resto] = numeros;
console.log(um, dois, tres);
console.log(resto)

const numeros2 = [1000,2000,3000,4000,5000,6000,7000,8000,9000]
const [um2, ,tres2, ,cinco2, , sete2] = numeros
console.log(um2, tres2, cinco2)