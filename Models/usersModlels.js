const {DataTypes}=require('sequelize')
const dotenv=require('dotenv')
dotenv.config();
const con=require('../config/Db')
const User=con.sequelize.define("mode",{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:true
    },
    parrentId:{
        type:DataTypes.INTEGER
    }
},
{

    tableName:'category'
});
module.exports=User