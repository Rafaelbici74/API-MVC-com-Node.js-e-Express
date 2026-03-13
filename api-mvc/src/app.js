const express = require("express");

const app = express();

const usuariosRoutes = require("./routes/usuariosRoutes");
const helloRoutes = require("./routes/helloRoutes");


app.use("/usuarios", usuariosRoutes);
app.use("/hello", helloRoutes);

app.get("/usuarios", (req, res) =>{

    res.send("/usuarios")

});

app.get("/hello", (req, res) =>{

        res.send("Ta funfando pai, se no helloRoutes estiver app.get /hello, ele puxa essa mensagem aqui, se estiver apenas /, puxa a mensagem do helloController")
});

module.exports = app;