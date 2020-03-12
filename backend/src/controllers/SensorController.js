const Sensor = require('../models/Sensor');

module.exports = {
    async listar(req, res) {
        const sensor = await Sensor.findAll();

        return res.json(sensor);
    },

    async criar(req, res){
        const {idViagem, timestamp, acelerometro, giroscopio} = req.body;

        const sensor = await Sensor.create({idViagem, timestamp, acelerometro, giroscopio});

        return res.json(sensor);
    }
};