// 宠物模型

const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var petsSchema = new Schema({
    // 名称
    petsName: String,
    // 品类
    petsClass: String,
    // 种类
    petsType: String,
    // 颜色
    petsColor: String,
    // 出生日期
    petsDate: String,
    // 性别
    petsGender: String,
    // 性格
    petsCharacter: String,
    // 价格
    petsPrice: Number,
    // 图片
    petsImg: String,
    // 商店
    store:{
        type: Schema.Types.ObjectId,
        ref: "store"
    }
});

mongoose.model("pets", petsSchema, "pets");