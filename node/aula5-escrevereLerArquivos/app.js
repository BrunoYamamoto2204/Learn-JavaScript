const path = require("path");
const caminhoAquivo = path.resolve(__dirname,"teste.json");

const escreve = require("./modules/escrever");
const ler = require("./modules/ler");

// const pessoas = [
//     {nome:"João"},
//     {nome:"MAria"},
//     {nome:"Eduardo"},
//     {nome:"Luiza"},
// ];

// const json = JSON.stringify(pessoas, "", 2);
// escreve(caminhoAquivo, json)

async function lerArquivo(caminho) {
    const dados = await ler(caminho);
    renderizaDados(dados);
}

function renderizaDados(dados) {
    dados = JSON.parse(dados);
    dados.forEach(val => console.log(val));
}

lerArquivo(caminhoAquivo)