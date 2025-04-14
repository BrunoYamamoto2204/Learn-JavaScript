const relogio = document.querySelector(".relogio");
const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const zerar = document.querySelector(".zerar");
let segundos = 0;
let timer;

function horaSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString("pt-br", {
        timeZone: "GMT"
    });
}

function iniciarRelogio() {
    timer = setInterval(function() {
        segundos++;
        relogio.innerHTML = horaSegundos(segundos)
    }, 1000)
}

document.addEventListener("click", function(e) {
    const ele = e.target

    if(ele.classList.contains("zerar")) {
        clearInterval(timer)
        relogio.classList.remove("pausado")
        relogio.innerHTML = "00:00:00"
        segundos = 0 
    }
    if(ele.classList.contains("iniciar")) {
        relogio.classList.remove("pausado")
        clearInterval(timer);
        iniciarRelogio();
    }
    if(ele.classList.contains("pausar")) {
        clearInterval(timer)
        relogio.classList.add("pausado")
    }
    
})



