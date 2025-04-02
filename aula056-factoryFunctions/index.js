function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome, 
        sobrenome,
        
        // Getter
        get nomeCompleto() {
            return `${nome} ${sobrenome}`
        },

        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(" ");
            this.nome = valor.shift();
            this.sobrenome = valor.join(" ");
            console.log(valor)
        },

        fala (assunto = "falando sobre nada") {
            return `${nome} está ${assunto}.`
        },

        altura,
        peso,
        
        // Getter
        get imc() { // Fica como um atributo
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    }
}

const p1 = criaPessoa("Jonson", "Silva", 1.8, 80);
p1.nomeCompleto = "Jonson Super Silva"
console.log(p1.nomeCompleto);
console.log(p1.nome)
console.log(p1.sobrenome)
console.log(p1.imc);
console.log(p1.fala(""))