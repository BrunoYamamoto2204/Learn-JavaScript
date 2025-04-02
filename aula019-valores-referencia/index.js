// Referência (mutável) - array, object, function

let a = [1,2,3]
let b = a
let c = [...a] // Copia e não tem referência
console.log(a,b)

a.push(4)
console.log(a,b)

b.pop()
console.log(a,b)

c.pop()
console.log(a,b,c)