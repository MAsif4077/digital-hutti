const Users = require('../Models/usersModlels');
const c = require('../config/Db')
const { QueryTypes } = require('sequelize')
module.exports = UserController = {
    async AddData(req, res) {
        try {
            let body = req.body
            console.log("Saved",body)

            await Users.create({ name: body.name, parrentId: body.parrentId })
            res.send("Data Save Successfully")
            console.log("Saved")
        }
        catch (exception) {
            console.log(exception)
            res.send(exception.message)
        }

    },
    async AddMultipleRecords(req, res) {
        level_1 = req.body.level_1,
            level_2 = req.body.level_2,
            level_3 = req.body.level_3,
            await Users.create({ level_1: body.level_1, level_2: body.level_2, level_3: body.level_3 })
        res.send("Data Save Successfully")
    }

}