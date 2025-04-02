const nomes = ["Maria", "João", "Eduardo", "Gabriel", "Julia"];

const nomesRemovidos = nomes.splice(3, 2);
console.log(nomes, nomesRemovidos)

// Remove Gabriel e Julia e add Jonson
console.log()
const nomes2 = ["Maria", "João", "Eduardo", "Gabriel", "Julia"];
const removidos2 = nomes2.splice(3,2, "Jonson");
console.log(nomes2, removidos2)