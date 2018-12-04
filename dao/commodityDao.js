const mongoose = require("mongoose");

// 渲染
module.exports.commodityAll = async ({ curPage, eachPage }) => {
    const commodityModel = mongoose.model("commodity");
    const result = {
        curPage: Number(curPage),
        eachPage: Number(eachPage)
    }
    result.total = await commodityModel.count();//总条数
    result.maxPage = Math.ceil(result.total / result.eachPage);//总页数
    result.rows = await commodityModel
        .find()
        .populate("sotre")
        .skip((result.curPage - 1) * result.eachPage)//跳转
        .limit(result.eachPage)//查询多少条
    return result
}
//新增
module.exports.addCommodity = async (data) => {
    let update = await mongoose.model("commodity")
        .create(data)
      return await mongoose.model("commodity")
      .find({_id:update._id})
      .populate("goodsImg")
      .populate("sotre")

}
//上传图片
// module.exports.addCommodityImg = async ({ commodityId, url }) => {
//     console.log(commodityId, url )
//     return await mongoose.model("commodity").updateOne({
//         _id: commodityId
//     }, {
//             $push: {
//                 goodsImg: url
//             }
//         });
// }
module.exports.addCommodityImg = async (data) => {
    return await mongoose.model("imgs").create(data);
}
//修改
module.exports.commdityUpdata = async (data) => {
    let { _id, goodsName, goodsType, goodsMaterial, goodsCanFo, goodsOnlyFor, goodsSize
        , goodsTaste, goodsSpecial, goodsRegion, goodsDate, goodsTime, goodsSupplier, goodsPrice } = data;
    return await mongoose.model("commodity").update({
        _id
    }, {
            $set: {
                goodsName, goodsType, goodsMaterial, goodsCanFo, goodsOnlyFor, goodsSize
                , goodsTaste, goodsSpecial, goodsRegion, goodsDate, goodsTime, goodsSupplier, goodsPrice
            }
        });
}

//删除
module.exports.removeCommdity = async (ID) => {
    return await mongoose.model("commodity").remove(ID); ID
}  