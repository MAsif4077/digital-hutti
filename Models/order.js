const { DataTypes } = require('sequelize');
var db = require('../config/Db');
const Order = db.sequelize.define('Order', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    totalItems: {
        type: DataTypes.INTEGER
    },
    customName: {
        type: DataTypes.STRING
    },

    cell: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    status:{
        type:DataTypes.STRING,
        allowNull :true
    }

},

    {

        tableName: 'order'
    }
);
module.exports = Order;