const express = require('express');
const ViagemController = require('./controllers/ViagemController');
const GeoController = require('./controllers/GeoController');
const SensorController = require('./controllers/SensorController');

const routes = express.Router();

//methods
//viagem
routes.post('/viagem', ViagemController.criar);
routes.get('/viagem', ViagemController.listar);
//geo
routes.post('/geo', GeoController.criar);
routes.get('/geo', GeoController.listar);
//sensor
routes.post('/sensor', SensorController.criar);
routes.get('/sensor', SensorController.listar);

module.exports = routes;
