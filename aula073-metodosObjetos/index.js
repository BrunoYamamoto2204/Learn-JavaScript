const produto = {nome: "caneca", preco: 1.8};
const outraCoisa = {
    ...produto,
    material: "porcelana"
};
outraCoisa.nome = "Outro nome";
outraCoisa.preco = 2.5;
console.log(produto);
console.log(outraCoisa);

// Não pode alterar o produto
console.log();
Object.freeze(produto);
produto.nome = "outro nome";
console.log(produto)

console.log();

const produto2 = {nome: "Produto", preco: 1.8};
console.log(Object.getOwnPropertyDescriptor(produto2, "nome"))

Object.defineProperty(produto2, "nome", {
    writable: false,
    configurable: false,
    value: "Qualquer outra coisa"
});
console.log(Object.getOwnPropertyDescriptor(produto2, "nome"))

console.log()
console.log("Chaves: " + Object.keys(produto2))
console.log("Valores: " + Object.values(produto2))
console.log("Os dois: " + Object.entries(produto2))

console.log()
for (let [chave,valor] of Object.entries(produto)) {
    console.log(chave, valor);
}