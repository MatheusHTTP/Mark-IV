const { Model, DataTypes } = require('sequelize');

class Sensor extends Model {
    static init(sequelize) {
        super.init({
            idViagem: DataTypes.STRING,
            timestamp: DataTypes.BIGINT,
            acelerometro: DataTypes.DOUBLE,
            giroscopio: DataTypes.DOUBLE
        },{
            sequelize
        })
    }
}

module.exports = Sensor;