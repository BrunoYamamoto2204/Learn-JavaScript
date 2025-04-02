function Calculadora() {

    const display = document.querySelector(".display");
    const btnClear = document.querySelector("btn-clear");
    
    this.inicia = function() {
        this.cliqueBotoes()
        this.pressionaEnter()
    }

    this.pressionaEnter = () => {
        document.addEventListener("keyup", e => {
            if (e.keyCode === 13) {
                this.realizaConta();
            }
        });
    }

    this.clearDisplay = () => {
        display.value = "";
    }

    this.apagaUm = () => {
        display.value = display.value.slice(0, -1);
    }

    this.realizaConta = () => {
        let conta = display.value;

        try {
            conta = eval(conta);

            if (!conta) {
                alert("Conta inválida!");
                return;
            }

            display.value =conta;
        } catch(e) {
            alert("Conta inválida!");
            return;
        }
    };

    this.cliqueBotoes = () => {
        document.addEventListener("click", (e) => {
            const el = e.target;

            if (el.classList.contains("btn-num")) {
                this.btnParaDisplay(el.innerText); 
            }
            if (el.classList.contains("btn-clear")) {
                this.clearDisplay();
            }
            if (el.classList.contains("btn-del")) {
                this.apagaUm();
            }
            if (el.classList.contains("btn-eq")) {
                this.realizaConta();
            }
        });
    }

    this.btnParaDisplay = valor => {
        display.value += valor;
        display.focus();
    }
}


const calculadora = new Calculadora();
calculadora.inicia();