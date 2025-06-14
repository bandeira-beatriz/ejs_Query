import express from 'express';
import contatoRoutes from './routers/contato.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.set('view engine', 'ejs')

app.get('/teste', (req, res) => {
    res.render('teste', {titulo : 'Bem vindo ao sistema!'})
})

app.use('/contatos', contatoRoutes)


// Inicia o servidor
const port = 3000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});


