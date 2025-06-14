import mysql from "mysql2";

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "usuarios"
})

connection.connect((err) => {
    if (err) throw err
    console.log("Conectado ao banco de dados")
})

export default connection;