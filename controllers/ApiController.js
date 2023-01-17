var db=require('../config/Db')
var product=require('../Models/product')
var Order=require('../Models/order')
var Items=require('../Models/orderitems')
const _ =require('lodash');

module.exports= ApiController={
    async addProduct(req, res) {
        let productInfo = req.body;
        try {
            await product.create({ name: productInfo.name, category: productInfo.category, quantity: productInfo.quantity, retailPrice: productInfo.retailPrice, wholeSalePrice: productInfo.wholeSalePrice,msrp: productInfo.msrp,categoryId: productInfo.categoryId,colour: productInfo.colour,size: productInfo.size,images: productInfo.images })
            res.json({ message: 'Product Created Successfully' });
        }
        catch (err) {
            res.json({ error: 'Something went wrong' })
            console.log(err)
        }

    },
    getCategoryGroupsForApp: async function (req,res) { // can change to using ProductSearchableProperties when the deletedAt column is utilized.
       _.mixin({
           pluck:_.map
       })
        function uniqSubCategories(val, key) { // REFACTOR THIS INTO SERVICE
            var uniqCatArrays = _.uniq(val, function (ea) {
                return ea[0] + '|' + ea[1] + '|' + ea[2];
            });
            // console.log(uniqCatArrays);
            var catName = key;
            var catAssocCategories = [];
            _.chain(uniqCatArrays)
                .map(function (catArr) {
                    catArr.forEach(element => {
                        catAssocCategories.push(element);
                    });
                })
                .uniq()
                .value();
            return {
                name: catName,
                associatedCategories: _.uniq(catAssocCategories)
            };
        }
        let properties = await product.findAll({
            select: ['category']
           
        });
        let categoryGroups = _.chain(properties)
            .pluck('category')
            .groupBy(function (ea) {
                if (_.isArray(ea)) {
                    return ea[0];
                }
            })
            .omit(undefined)
            .mapValues(uniqSubCategories)
            .map(category => category)
            .value();
            res.send(categoryGroups)
    },
    async createOrder(req, res) {
        let body = req.body;
        try{ 
            await Order.create({totalItems:body.totalItems,customName:body.customName,cell:body.cell,email:body.email,status:body.status})
            res.json({ message: 'order Created Successfully' });
            for (let obj of body.orderItems){
            await Items.create(obj)
            }
        /*await product.findAll({
                quantity
            })*/
            console.log({ message: 'items Created Successfully' });
            
        }
    
        catch (err) {
            res.json({ error: 'Something went wrong' })
            console.log(err)
        }
    },
    async findProduct (req,res){
       var a= await product.findAll({
           select: ['quantity']
        })
        console.log(a);
    }
 
}