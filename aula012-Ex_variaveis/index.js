let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

let varD = varA //A
varA = varB // B
varB = varC // C
varC = varD // A

// ou //

[varA, varB, varC] = [varB, varB, varA]

console.log(varA, varB, varC) // Deve ser B C A