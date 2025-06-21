import { getConnection } from '../db.js'

export async function buscarContatos(){    
    const db = await getConnection();
    const [contatos] = await db.query("SELECT * FROM contato")

    return contatos
};

// export async function adicionarContatos(){
//     const [contatos] = await db.query("INSERT INTO contato (NOME, EMAIL, TELEFONE, TAG) VALUES (?,?,?,?)");

//     return contatos
// };

// export async function alterarContatos(){
//     const [contatos] = await db.query("UPDATE contato SET NOME = ?, EMAIL = ?, TELEFONE = ?, TAG = ? WHERE ID = ?");

//     return contatos
// };

// export async function deletarContatos(){
//     const [contatos] = await db.query("DELETE FROM contato WHERE ID = ?")

//     return contatos

// }