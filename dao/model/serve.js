// 客户模型

const mongoose = require("mongoose");
//描述数据结构
var serveSchema = new mongoose.Schema({
    // 服务名称
    serveName:String,
    // 服务类型
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
    serveLevel:String,
    // 价格
    servePrice:String,
    // 商店
    storeId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "stores"
    }


});
//名称 数据结构 集合
mongoose.model("serves", serveSchema, "serves");
