const { Model, DataTypes } = require('sequelize');

class Viagem extends Model {
    static init(sequelize) {
        super.init({
            destino: DataTypes.STRING,
        },{
            sequelize
        })
    }
}

module.exports = Viagem;