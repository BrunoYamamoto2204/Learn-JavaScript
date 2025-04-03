const pessoas = [
    {id:3, nome: "Jonson"},
    {id:2, nome: "Jabilson"},
    {id:1, nome: "Jerson"},
]

// const novasPessoas= {}
// for (const pessoa of pessoas) {
//     const{ id } = pessoa;
//     novasPessoas[id] = {...pessoa}
// }

const novasPessoas = new Map();
for (const pessoa of pessoas) {
    const{ id } = pessoa;
    novasPessoas.set(id, {...pessoa})
}

console.log(novasPessoas)
for (const pessoas of novasPessoas.values()) {
    console.log(pessoas)
}

console.log()
novasPessoas.delete(2);
console.log(novasPessoas)