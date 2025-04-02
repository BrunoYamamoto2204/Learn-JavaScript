const a1 = [1,2,3];
const a2 = [4,5,6];
const a3 = a1.concat(a2, [7,8,9], "Jonson")
console.log(a3)

console.log()
const a4 = [...a1, "Jonson", ...a2]
console.log(a4)