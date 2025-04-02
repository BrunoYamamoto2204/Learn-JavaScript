(function(idade,peso, altura) {
    const sobrenome = "Silva";
    function criaNome(nome) {
        return nome + " " + sobrenome;
    }

    function falaNome(){
        console.log(criaNome("Jonson"))
    }

    falaNome();
    console.log(idade,peso, altura)

})(30,80,1.80);

const nome = "Jabilson"
console.log(nome)

(function(params) {
    // Conteúdo da func
})(valor_params);