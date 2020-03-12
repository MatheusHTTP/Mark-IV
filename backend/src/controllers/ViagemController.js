const Viagem = require('../models/Viagem');

module.exports = {
    async listar(req, res) {
        const viagem = await Viagem.findAll();

        return res.json(viagem);
    },

    async criar(req, res){
        const {destino} = req.body;

        const viagem = await Viagem.create({destino});

        return res.json(viagem);
    }
};