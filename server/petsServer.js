//服务层
const { petsListByPage,addPets,upDate,updateById,petsListById,removePets} = require("../dao/daoPets.js");

//宠物列表
module.exports.petsListByPage = async (page) => {
    return await petsListByPage(page);
}
//新增宠物
module.exports.addPets = async (data) => {
    return await addPets(data);
}
//宠物修改
module.exports.upDate = async (data) => {
    return await upDate(data);
}
module.exports.updateById = async (data) => {
    return await updateById(data);
}
//ID查找
module.exports.petsListById = async (data) => {
    return await petsListById(data);
}
//删除宠物
module.exports.removePets = async (data) => {
    return await removePets(data)
  }
