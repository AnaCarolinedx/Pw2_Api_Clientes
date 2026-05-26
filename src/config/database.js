const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "pw2_api_clientes"
});

connection.connect((error) => {
    if(error){
        console.log("Erro ao conectar ao banco:", error);
    } else {
        console.log("MySQL conectado com sucesso!");
    }
});

module.exports = connection;