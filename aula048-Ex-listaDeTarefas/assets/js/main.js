const inputTarefa = document.querySelector(".input-tarefa");
const btnTarefa = document.querySelector(".btn-tarefa");
const tarefas = document.querySelector(".tarefas");

// Adicionar tarefa - Botão Adicionar tarefa 
btnTarefa.addEventListener("click", function(){
    if (!inputTarefa.value) return;   
    criaTarefa(inputTarefa.value); 
});

// Adicionar tarefa - ENTER
inputTarefa.addEventListener("keypress", function(e) {
    if (e.keyCode === 13){ //Enter tem chave 13
        if (!inputTarefa.value) return;   
        criaTarefa(inputTarefa.value);
    }
})

// Botão de apagar
document.addEventListener("click", function(e) {
    const el = e.target;
    
    if(el.classList.contains("apagar")) {
        el.parentElement.remove();
        salvarTarefas(); // Sobrescreve a lista com o conteúdo apagado na memória do navegador 
    }
})

function limpaInput() {
    inputTarefa.value = ""
    inputTarefa.focus();
}

function criaBotaoApagar(li){
    const botaoApagar = document.createElement("button");
    botaoApagar.innerHTML = "Apagar";
    botaoApagar.setAttribute("class", "apagar")
    li.appendChild(botaoApagar);
}

function criaTarefa(textoInput) {
    const li = document.createElement("li");
    li.innerText = textoInput;
    tarefas.appendChild(li);
    criaBotaoApagar(li);
    limpaInput();
    salvarTarefas();
}

function salvarTarefas () {
    const liTarefas = tarefas.querySelectorAll("li")
    const listaDeTarefas = []

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace("Apagar", "");
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem("tarefas", tarefasJSON);
}

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem("tarefas");
    const listaDeTarefas = JSON.parse(tarefas);
    console.log(listaDeTarefas)

    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}
adicionaTarefasSalvas()