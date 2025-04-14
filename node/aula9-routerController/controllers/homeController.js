exports.paginaInicial = (req, res) => {
    res.send(`
    <form action="/" method="POST">
        Nome do cliente: <input type="text" name="campo"> 
        Outro campo: <input type="text" name="outrocampo">
        <button>Olá Mundo</button>
    </form>
    `);;
}

exports.trataPost = (req, res) => {
    res.send("Ei sou sua nova rota de POST.")
}