const fs = require("fs").promises;
const path = require("path");

async function readdir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname); // Se rootDir foi passado, se não pega o atual
    const files = await fs.readdir(rootDir); // Arquivos dentro do rootDir
    walk(files, rootDir);
}

async function walk(files,rootDir) {
    for(let file of files) {
        const fileFullPath = path.resolve(rootDir, file); // Pega todo o caminho do rootDir e adiciona o arquivo 
        const stats = await fs.stat(fileFullPath);

        if(/\.git/g.test(fileFullPath)) continue;
        if(/\node_modules/g.test(fileFullPath)) continue;

        if(stats.isDirectory()) {
            await readdir(fileFullPath);
            continue
        }

        if(
            !/\.html$/g.test(fileFullPath) 
        ) continue;

        console.log(fileFullPath, stats.isDirectory());
    }
}
readdir("c:/Users/bruhi/OneDrive/Documentos/Pratica_JavaScript_2/");