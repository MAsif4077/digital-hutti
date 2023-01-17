var express = require('express');
var ApiController = require('../controllers/ApiController')
var RunController=require('../UserControllers/UsersControl')
const router = express.Router();

// routes by Zeeshan
router.post('/addProduct', ApiController.addProduct);

// routes by Asif
router.post('/create',RunController.AddData)
router.post('/createMulti',RunController.AddMultipleRecords)
// routes by mudassir
router.get('/getProduct', ApiController.getCategoryGroupsForApp);
router.post('/createOrder',ApiController.createOrder);
router.get('/findProduct', ApiController.findProduct);
module.exports = router