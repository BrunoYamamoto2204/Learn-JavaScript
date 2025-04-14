const fs = require("fs").promises;
const path = require("path");
const caminhoAquivo = path.resolve(__dirname,".." ,"teste.json");

module.exports = (caminho, dados) => {
    fs.writeFile(caminho,dados, { flag: "w" }); 
}

