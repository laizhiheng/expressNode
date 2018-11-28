const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var storeSchema = new Schema({
    //店名
    storeName: String,
    //营业执照
    shopName: String,
    //营业执照图片
    shopLIcenceImg: {
        // type: Schema.Types.ObjectId,
        // ref: "imgs"
        type:String
    },
    //法人
    shopCorporate: String,
    //地址
    shopAdd: String,
    //电话
    shopTel: String,
    //头图
    shopImg: String,
    // [{
    //     type: Schema.Types.ObjectId,
    //     ref: "imgs"
    // }],
    //商店等级
    grade: String,
    //商品
    commodity: {
        type: Schema.Types.ObjectId,
        ref: "commodity"
    },
    //宠物
    pets: {
        type: Schema.Types.ObjectId,
        ref: "pets"
    },
    //服务
    serve: {
        type: Schema.Types.ObjectId,
        ref: "serve"
    },
    // 门店管理员
    users:{
        type: Schema.Types.ObjectId,
        ref: "users"
    }



});
mongoose.model("stores", storeSchema, "stores");
