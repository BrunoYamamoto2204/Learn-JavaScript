let umaString = "Um \"texto\""

console.log(umaString)
console.log(`Manipular string: ${umaString[6]}`)
console.log(`Manipular string: ${umaString.charAt(6)}`)
console.log(`texto começa no index: ${umaString.indexOf("texto")}`)
console.log(`index do texto ao contrário : ${umaString.lastIndexOf("o")}`)
console.log(`replace texto: ${umaString.replace("texto", "textolegal")}`)
console.log(`tamanho da string: ${umaString.length}`)
console.log(`slice de texto: ${umaString.slice(4, 9)}`)
console.log(`slice negativo de texto: ${umaString.slice(-7)}`)
console.log(`dividir strings: ${umaString.split(" ")}`)