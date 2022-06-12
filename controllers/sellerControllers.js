const User = require('../models/User');
// const Order = require('./Order');
const Catalog = require('../models/Catalog');


//I still have to handle the error here, something like 
const errHandler = (err)=>{

};

module.exports.sellerRouteAuth = (req,res,next)=>{
    res.status(200).json(`Seller ${req.user_id} verified`);
};
    
module.exports.createCatalogPOST = async (req,res)=>{
 try {
     const userID = req.user_id;
     const {name,price,description} = req.body;
     const catalog = await Catalog.catalogCreation(userID,name,price,description); 
     res.status(201).json(`A new product has been successfully added to Seller:${userID} catalog.
     Total number of products: ${catalog.productsCount()}`);
 } catch (err) {
     console.log(err);
     //  errHandler(err)
    }
};

module.exports.ordersListGET = (req,res)=>{
 
};

