const mongoose  = require('mongoose');
const Schema = mongoose.Schema;

const buyerReqSchema = new Schema({
    userID: {type: String},
    productsList : {type: Array}, 
    createdAt: {type: Date}, 
    status: {type: String},
    total: {type: Number},
    deliveryService: {type: String},
    deliveryAddress: {type: String}
});

const BuyerReq = mongoose.model("BuyerReq", buyerReqSchema);
module.exports = BuyerReq; //export schema