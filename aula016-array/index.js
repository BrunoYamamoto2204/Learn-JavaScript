const alunos = ['Bruno', 'Jonson', 'Silva']
console.log(alunos)
console.log(alunos[0])
console.log(alunos[1])
console.log(alunos[2])

alunos[0] = "João"
alunos[alunos.length] = "Jabilson"
alunos.push("Ultimo") // Adiciona no final
alunos.unshift("Primeiro") // Adciona no primeiro
console.log(alunos)

alunos.pop() // Remove no final
alunos.shift() // Remove no primeiro
console.log(alunos)

console.log(`Slice 3a primeiros: ${alunos.slice(0,3)}`)
