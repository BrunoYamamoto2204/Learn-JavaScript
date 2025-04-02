const verdadeira = true;

let nome = 'Luiz';
var nome2 = 'Luiz';

if (verdadeira) {
    let nome = "Otávio";
    var nome2 = 'Rogério';
    
    if (verdadeira) {
        var nome2 = "Ronaldo";
        let nome = "outra coisa"

    }
}
console.log(nome, nome2)