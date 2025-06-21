import{
    buscarContatos
} from '../models/contatosModel.js'

export async function listarContatos (req, res){
    try {
        const contatos = await buscarContatos();
        res.render('contatos', {contatos : contatos})

    } catch {
        res.status(500).json({erro: 'Erro de buscar o contatos'})
    }

}