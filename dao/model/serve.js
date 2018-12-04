// 客户模型

const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var serveSchema = new Schema({
    // 服务名称
    serveName:String,
    // 类别
    serveType:String,
    // 排期
    serveSchedule:String,
    // 适用规格
    serveCanFor:String,
    // 服务规格
    serveDetial:String,
    // 耗时
    serveTime:String,
    // 服务等级
    serveLevel:Number,
    // 价格
    servePrice:Number,
    // 商店
    store:{
        type: Schema.Types.ObjectId,
        ref: "stores"
    }

    
});
mongoose.model("serve", serveSchema, "serve");