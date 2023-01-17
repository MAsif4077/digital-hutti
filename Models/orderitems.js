const { DataTypes } = require('sequelize');
var db = require('../config/Db');
const Items = db.sequelize.define('Items', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    itemname: {
        type: DataTypes.STRING
    },
    price :{
        type : DataTypes.INTEGER
    },
    productId:{
        type : DataTypes.INTEGER
    },
    quantity: {
        type: DataTypes.INTEGER
    },

    image: {
        type: DataTypes.STRING
    },
    color: {
        type: DataTypes.STRING
    }

},

    {

        tableName: 'items'
    }
);
module.exports = Items;