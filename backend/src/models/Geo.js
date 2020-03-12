const { Model, DataTypes } = require('sequelize');

class Geo extends Model {
    static init(sequelize) {
        super.init({
            idViagem: DataTypes.STRING,
            timestamp: DataTypes.BIGINT,
            latitude: DataTypes.DOUBLE,
            longitude: DataTypes.DOUBLE,
            velocidade: DataTypes.DOUBLE,
        },{
            sequelize
        })
    }
}

module.exports = Geo;