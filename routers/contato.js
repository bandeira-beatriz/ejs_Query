import {Router} from 'express';

import db from '../db.js';

const router = Router();

router.get('/', (req,res) =>{
    db.query("SELECT * FROM contato",  (err, result) => {
    res.render('contatos', {contatos : result})
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

export default router;