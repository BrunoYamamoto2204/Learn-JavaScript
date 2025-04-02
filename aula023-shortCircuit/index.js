// FALSY: 0 - "" - NaN - null - undefined

console.log("Luiz" && NaN && "Maria"); // Retorna o primeiro falso
console.log("Luiz" && "Maria"); // Se não tiver falsa, retorna o último verdadeiro
console.log(0 || false || null || "Jonson Silva" || true); // Retorna o 1a verdadeiro
 
const corUsuario = null;
const corPadrao = corUsuario || "preto"
console.log(corPadrao)