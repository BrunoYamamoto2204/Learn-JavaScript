require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose"); // Faz conexão com banco de dados

mongoose.connect(process.env.CONNECTIONSTRING) // Retorna promessa
    .then(() => {
        app.emit("pronto");
    })
    .catch(e => console.log(e));

const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");
const routes = require("./routes");
const path = require("path");
const helmet = require("helmet");
const csrf = require("csurf");
const { middlewareGlobal, checkCsrfErro, csrfMiddleware } = require("./src/middlewares/middleware");

app.use(helmet());
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "public")));

const sessionOptions = session({
    secret: "wefweqfweqf wef weq fwqedweq dwqefwq",
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
});
app.use(sessionOptions);
app.use(flash());

app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

app.use(csrf());
// Nossos próprios middlewares
app.use(middlewareGlobal); // Não tem uma rota definida (Geral)
app.use(checkCsrfErro);
app.use(csrfMiddleware);
app.use(routes);

app.on("pronto", () => {
    app.listen(3000, () => {
        console.log("Acessar http://localhost:3000")
        console.log("Servidor executando na porta 3000")
    });
});


