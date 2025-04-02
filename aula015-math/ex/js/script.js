const numero = Number(prompt("Digite um número:"));
const numeroTitulo = document.getElementById("numero-titulo");
const texto = document.getElementById("texto");

numeroTitulo.innerHTML = numero;
texto.innerHTML =  `<p>Raiz quadrada ${numero ** 0.5}</p>`
texto.innerHTML += `<p>${numero + 2} é inteiro: ${Number.isInteger(numero)}</p>`
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}</p>`
texto.innerHTML += `<p>Arredondando p/ baixo: ${Math.floor(numero)}</p>`
texto.innerHTML += `<p>Arredondando p/ cima: ${Math.ceil(numero)}</p>`
texto.innerHTML += `<p>Com duas casa decimais${numero.toFixed(2)}</p>`
