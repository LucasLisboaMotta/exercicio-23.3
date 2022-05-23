const express = require('express');
const router = express.Router();
const endereco = require('../service/endereco')

router.get('/', (req, res) => {
    res.status(200).json({status: "UP"});
})

router.get('/endereco', async (req, res) => {
    const [retornoBanco] = await endereco.getAll();
    res.status(200).json(retornoBanco);
})

router.get('/endereco/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [retornoBanco] = await endereco.getAll(id);
        if (retornoBanco.length === 0) throw error
        res.status(200).json(retornoBanco);
    } catch(error) {
        console.log(error)
        res.status(500).json({mensage: 'Endereço não encontrado'})
    }
})

// `id_endereco`, `logradouro`, `numero`, `bairro`, `cep`
router.post('/endereco', async (req, res) => {
 const { logradouro, numero, bairro, cep }  =  req.body;
 await endereco.post(logradouro, numero, bairro, cep);

 const [retornoBanco] = await endereco.getAll();
 const last = retornoBanco[retornoBanco.length - 1];
 console.log(last)
 const { id_endereco } = last;
 const novoEndereco = { id_endereco, logradouro, numero, bairro, cep };
 res.status(201).json(novoEndereco)
})

module.exports = router;
