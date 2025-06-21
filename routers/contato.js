import {Router} from 'express';
import { listarContatos } from '../controllers/contatosController.js';


const router = Router();

router.get('/', listarContatos)

// router.get('/', (req,res) =>{
//     db.query("SELECT * FROM contato",  (err, result) => {
//         console.log(result)
//     res.render('contatos', {contatos : result})
// })
// });

router.get('/lista', (req,res) =>{
    db.query("SELECT * FROM contato",  (err, result) => {
        console.log(result)
    res.render('lista', {lista : result}) // aqui o lista faz referencia ao EJS, a segunda parte o nome tem que estar relacionado ao que você vai chamar no arquivo EJS, por exemplo, se eu colocar contatos:results, no ejs tem que ter contatos.length e assim por diante
})
});


router.post('/', (req,res) =>{
    const { nome, email, telefone, tag} = req.body;

    db.query("INSERT INTO contato (NOME, EMAIL, TELEFONE, TAG) VALUES (?,?,?,?)", [nome, email, telefone, tag], (err, result) => {
    console.log(result)
    if (err) throw (err);
    res.json(result)
})
});

router.put('/:ID', (req, res) =>{
    const { ID } = req.params
    const { NOME , EMAIL , TELEFONE, TAG} = req.body;

    console.log(NOME)
    
    db.query("UPDATE contato SET NOME = ?, EMAIL = ?, TELEFONE = ?, TAG = ? WHERE ID = ?", [NOME, EMAIL, TELEFONE, TAG, ID], (err, result) => {
      if (err) {
        console.error("Erro ao atualizar usuário:", err);
        return res.status(500).json({ error: "Erro ao atualizar usuário" });
      }
      
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Usuário não encontrado" });
      }
      
      res.json({ message: "Usuário atualizado com sucesso", result });
    }   
    )
});

router.delete('/:ID', (req, res) =>{
    const { ID } = req.params
    db.query("DELETE FROM contato WHERE ID = ?", [ID], (err, result) => {
    if (err) throw err;
    res.json(result);
  })

});

export default router;