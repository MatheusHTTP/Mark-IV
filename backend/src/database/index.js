const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

//import model
const Viagem = require('../models/Viagem');
const Geo = require('../models/Geo');
const Sensor = require('../models/Sensor');

const connection = new Sequelize(dbConfig);

//init
Viagem.init(connection);
Geo.init(connection);
Sensor.init(connection);

module.exports = connection;