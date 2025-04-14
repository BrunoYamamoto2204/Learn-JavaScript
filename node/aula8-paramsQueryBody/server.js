const express = require("express");
const app = express();

app.use(
    express.urlencoded({ extended: true})
);

// /profiles/12345?campanha=googleads&nomecampanha=seila

app.get("/", (req, res) => {
    res.send(`
    <form action="/" method="POST">
        Nome do cliente: <input type="text" name="campo"> 
        Outro campo: <input type="text" name="outrocampo">
        <button>Olá Mundo</button>
    </form>
    `);
});

app.get('/testes/:idUsuarios/:parametro', (req, res) => {
    console.log(req.params);
    console.log(req.query)
    res.send(req.query.nome)
});

app.post("/", (req,res) => {
    console.log(req.body);
    res.send(`O que você me enviou foi: ${req.body.campo}`) // Name do input = chave do obj
});

app.listen(3000, () => {
    console.log("Acessar http://localhost:3000")
    console.log("Servidor executando na porta 3000")
});

