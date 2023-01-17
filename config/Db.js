const {Sequelize,DataType}=require('sequelize');
const dotenv=require('dotenv')
dotenv.config();
console.log(process.env.DB_PASSWORD)

const sequelize=new Sequelize(
    'digital_hutti',
    process.env.DB_USER,
    process.env.DB_PASSWORD,{
    host: process.env.DB_HOST,
    dialect:'mysql',
    pool:{max:5,min:0,idle:1000}
});
sequelize.authenticate()
.then(()=>{
    console.log("Database Connected")
})
.catch((err)=>{
    console.log("Error"+err)
})

module.exports={sequelize};