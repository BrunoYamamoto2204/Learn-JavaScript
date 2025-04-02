// try{
//     console.log("Abri um arquivo");
//     console.log("Manipulei o arquivo e gerou o erro");
//     console.log("Fechei o arquivo");
// }
// catch {
//     console.log("Tratando o erro");
// }
// finally {
//     console.log("'FINALLY: Eu sempre sou executado");
// }

console.log();

function retornaHora(data) {
    if (data && !(data instanceof Date)) { // Foi enviado, mas não é Date.
        throw new TypeError("Esperando instância de Date.")
    }

    if(!data) { // Não foi enviado.
        data = new Date();
    }

    return data.toLocaleTimeString("pt-BR",{
        hour12: false
    })
}

try {
    const data = new Date("01-01-1970 12:58:12")
    const hora = retornaHora()
    console.log(hora)
}
catch (e) {
    // Tratar erro
    console.log("Tenha um bom dia.")
}