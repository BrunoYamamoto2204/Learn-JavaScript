let num1 = 10.521434241

console.log(num1.toFixed(2))
console.log(`num1 é inteiro? ${Number.isInteger(num1)}`)

let n2 = 0.8 
let n3 = 0.1

n2 += n3 // Impreciso
console.log(n2)

n2 += n3
n2 = Number(n2) // Desta forma normaliza
console.log(n2)
console.log(Number.isInteger(n2))

