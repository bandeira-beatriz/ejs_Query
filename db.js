// db.js
import mysql from 'mysql2/promise';

export async function getConnection() {
    try {
        const connection = await mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "db"
        });
        console.log('Conectado ao MySQL');
        return connection;
    } catch (err) {
        console.error('Erro ao conectar ao MySQL:', err);
        throw err;
    }
}
