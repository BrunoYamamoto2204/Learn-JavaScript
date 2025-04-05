function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== "string") {
            reject("CAI NO ERRO");
            return;
        }

        setTimeout(() => {
            resolve(msg.toUpperCase() + " - Passei na promise");
        }, tempo);
    });
}

// Promise.all Promise.race Promise.resolve Promise.reject
const promises = [
    esperaAi("Promise 1", 3000),
    esperaAi("Promise 2", 500),
    esperaAi("Promise 3", 1000),
    // esperaAi(1000, 1000),
]

// Promise.resolve

function baixaPagina() {
    const emCache = false;

    if (emCache) {
        return Promise.resolve("Página em cache");
    }
    else {
        return esperaAi("Baixei a página", 3000);
    }
}

baixaPagina()
    .then(dadosPagina => {
    console.log(dadosPagina);
})
    .catch(e => console.log(e));


// Promise.reject

// function baixaPagina() {
//     const emCache = true;

//     if (emCache) {
//         return Promise.reject/resolve("Página em cache");
//     }
//     else {
//         return esperaAi("Baixei a página", 3000);
//     }
// }

// baixaPagina()
//     .then(dadosPagina => {
//     console.log(dadosPagina);
// })
//     .catch(e => console.log("ERRO",e));


// Promise.all

// Promise.all(promises)
//     .then(function(valor) {
//         console.log(valor);
//     })
//     .catch(function(erro) {
//         console.log(erro);
//     })

// Promise.race


// Promise.race(promises)
//     .then(function(valor) {
//         console.log(valor);
//     })
//     .catch(function(erro) {
//         console.log(erro);
//     })