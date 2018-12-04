const { commodityAll,  addCommodity,addCommodityImg ,commdityUpdata,removeCommdity} = require("../dao/commodityDao.js");

// 列表
module.exports.commodityAll = async (data) => {
    return await commodityAll(data);
};
//新增
module.exports.addCommodity = async (data) => {
    return await addCommodity(data);
};
//上传图片
module.exports.addCommodityImg = async (file) => {
    return await addCommodityImg(file);
};
//修改
module.exports.commdityUpdata = async (data) => {
    return await commdityUpdata(data);
};
//删除
module.exports.removeCommdity = async (data) => {
    return await removeCommdity(data);
};