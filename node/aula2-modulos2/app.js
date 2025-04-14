const Cachorro = require("./mod")
const path = require("path")

const cachorrinho = new Cachorro("Jonson")
cachorrinho.latir();

console.log(__filename); // Caminho do arquivo
console.log(__dirname) // Caminho do diretório que está o arquivo

console.log(path.resolve(__dirname, "..", "..", "arquivos", "imagens"));