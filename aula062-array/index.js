// Pop e cópia 
const nomes = ['Eduardo', "Maria", "Joana"];
const novo = [...nomes]

const novo2 = nomes;
novo2.pop();

console.log(nomes)
console.log(novo)

// Unshift, slice
console.log()
const nomes2 = ['Eduardo', "Maria", "Joana"];
nomes2.unshift("jonson")
console.log(nomes2)
console.log(nomes2.slice(0,-1))

// String em array
console.log()
const nome = "Jonson Silva Pereira"
const nomeCompleto = nome.split(" ")
console.log(nomeCompleto)

// Join
const nomeString = nomeCompleto.join(" ")
console.log(nomeString)