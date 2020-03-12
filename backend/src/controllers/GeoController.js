const Geo = require('../models/Geo');

module.exports = {
    async listar(req, res) {
        const geo = await Geo.findAll();

        return res.json(geo);
    },

    async criar(req, res){
        const {idViagem, timestamp, latitude, longitude, velocidade} = req.body;

        const geo = await Geo.create({idViagem, timestamp, latitude, longitude, velocidade});

        return res.json(geo);
    }
};