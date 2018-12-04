// 杂物模型

const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var commoditySchema = new Schema({
    //名称
    goodsName: String,
    // 品类
    goodsType: String,
    // 材质或制作方法
    goodsMaterial: String,
    // 适用规格
    goodsCanFo:String,
    // 专属规格
    goodsOnlyFor:String,
    // 包装规格
    goodsSize:String,
    // 口味
    goodsTaste:String,
    // 特殊功用
    goodsSpecial:String,
    // 产地
    goodsRegion:String,
    // 出厂日期
    goodsDate:String,
    // 保质期
    goodsTime:String,
    // 供应商
    goodsSupplier:String,
    // 特色说明
    goodsIntro:String,
    // 价格
    goodsPrice:Number,
    // 图片
    goodsImg:{
        type: Schema.Types.ObjectId,
        ref: "imgs"
    },
    //路径
    goodsUrl:String,
    //商店
    store:{
        type: Schema.Types.ObjectId,
        ref: "stores"
    }
    
});
mongoose.model("commodity", commoditySchema, "commodity");