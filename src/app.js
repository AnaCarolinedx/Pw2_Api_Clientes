const path = require("path");
const prisma = require("./config/prisma");
const { PrismaClient } = require("@prisma/client");
require("dotenv").config({ path: path.resolve(__dirname, ".env")});

const express = require("express");
require("./config/database");

const app = express();
const PORT = process.env.PORT || 3000;
const clientesRoutes = require("./routes/clientesRoutes");

//Middlewares
app.use(express.json());

//Rota raiz:
app.get("/", (req, res) => {
    res.json({
        mensagem: "API de clientes",
        versao: "1.0.0",
        endpoints: {
        listarTodos: "GET /clientes",
        buscarPorId: "GET /clientes/:id",
        }
    })
})

app.use("/clientes", clientesRoutes);

app.use((req, res) => {
    res.status(404).json({
        sucesso: false,
        mensagem: "Rota não encontrada",
    })
})

app.listen(PORT, () => {
    console.log(`servidor rodando na porta ${PORT}`);
})

process.on("SIGINT", async () => {
    await prisma.$disconnect();
    console.log("Conexão com o banco encerrada.");
    process.exit(0);
});

module.exports = app;