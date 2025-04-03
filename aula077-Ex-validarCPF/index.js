// 705.484.450-52 070.987.720-03
function validarCpf(cpf) {
    if (typeof cpf === 'undefined') return false;
    if(cpf.length !== 11) return false;
    if(isSequencia(cpf)) return false;
    
    let validar = cpf.splice(9,2);
    
    let mult1 = 10;
    const soma1 = cpf
        .map((valor) => {
            valor = valor * mult1;
            mult1 -= 1;
            return valor;
        })
        .reduce((ac,valor) => {
            return ac += valor
        });
    
    let primeiroDigito = 11 - (soma1 % 11)
    if (primeiroDigito > 9) primeiroDigito = 0;
    cpf.push(String(primeiroDigito))
    
    let mult2 = 11;
    const soma2 = cpf
        .map((valor) => {
            valor = valor * mult2;
            mult2 -= 1;
            return valor;
        })
        .reduce((ac,valor) => {
            return ac += valor
        });
        
    let segundoDigito = 11 - (soma2 % 11)
    if (primeiroDigito > 9) primeiroDigito = 0;
    cpf.push(String(segundoDigito))

    verificarcpf = cpf.slice(-2)

    for (let i = 2; i > 0; i--){
        if(verificarcpf[i-1] != validar[i-1]){
            return false // Final - Inválido
        }
        else {
            return true // Final - Válido
        }
    }
}

function isSequencia(cpf) {
    const sequencia = cpf[0].repeat(cpf.length)
    return sequencia === cpf.join("")
}

function compararCfp(cpf, validarCpf) {
    for (let i in validarCpf) {
        if (validarCpf[i] !== cpf[i]){
            return false
        }
    }
    return true
}

const formatarCpf = cpf => cpf.replace(/\D+/g, '').split("")

function valido(cpf, conferirCpf){

    cpf = formatarCpf(cpf);
    conferirCpf = formatarCpf(conferirCpf)

    const valido = compararCfp(cpf, conferirCpf)

    if (valido && validarCpf(cpf)) {
        return true
    }
    else{
        return false
    }
}

// CPFs
let cpf = "705.484.450-52";
const conferirCpf = "705.484.450-52";

console.log(valido(cpf,conferirCpf))
