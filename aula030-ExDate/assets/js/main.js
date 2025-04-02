// const h1 = document.querySelector(".container h1");
// const datenow = new Date();

// function getDiaSemanaTexto(diaSemana) {
    
//     const diasSemana = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"]
//     return diasSemana[diaSemana]
// }

// function getNomeMes(numeroMes) {
    
//     const meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]
//     return meses[numeroMes]
// }

// function criaData(data) {
//     const diaSemana = data.getDay();
//     const numeroMes = data.getMonth();

//     const nomeDia = getDiaSemanaTexto(diaSemana);
//     const nomeMes = getNomeMes(numeroMes);

//     return (`${nomeDia}, ${data.getDate()} de ${nomeMes}` + 
//     ` de ${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}`)
// }


// console.log(criaData(datenow))
// h1.innerHTML = criaData(datenow);

const h1 = document.querySelector(".container h1");
const data = new Date();
const opcoes = {
    dateStyle: "full"
}

h1.innerHTML = data.toLocaleDateString("pt-br", opcoes)