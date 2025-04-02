// const umDia = 60 * 60 * 24 * 1000 || 60 seg * 60 = 1h * 24 = 1 dia * 1000 = 1dia (milesimos)
const datanow = new Date()
const data1 = new Date(2025, 2, 28, 18, 30, 30); // Ano mê dia hora min seg
const data2 = new Date("2025-03-28 18:30:30")
console.log(data2.toString());

console.log("Dia", data2.getDate())
console.log("Mês", data2.getMonth() + 1)
console.log("Ano", data2.getFullYear())
console.log("Hora", data1.getHours())
console.log("Min", data1.getMinutes())
console.log("Seg", data1.getSeconds())