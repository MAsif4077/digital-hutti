const { DataTypes } = require('sequelize');
var db = require('../config/Db');
const Product = db.sequelize.define('Product', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    name: {
        type: DataTypes.STRING
    },category :{
  type : DataTypes.JSON
    },
    quantity: {
        type: DataTypes.INTEGER
    },

    retailPrice: {
        type: DataTypes.INTEGER
    },
    wholeSalePrice: {
        type: DataTypes.INTEGER
    },
    msrp: {
        type: DataTypes.INTEGER
    },

    category: {
        type: DataTypes.STRING
    },
    colour: {
        type: DataTypes.STRING
    },
    size: {
        type: DataTypes.STRING
    },
    images: {

        type: DataTypes.STRING
    },

},

    {

        tableName: 'product'
    }
);
module.exports = Product;