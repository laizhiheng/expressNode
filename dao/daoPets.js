//持久层
var mongoose = require("mongoose");
//宠物列表
module.exports.petsListByPage = async ({ curPage, eachPage }) => {
    const result = {
        curPage: Number(curPage),
        eachPage: Number(eachPage)
    }
    const petsModel = mongoose.model("pets");
    result.total = await petsModel.count(); //统计总数
    result.maxPage = Math.ceil(result.total / result.eachPage); //总页数，ceil向下取整
    result.rows = await petsModel
        .find()
        .populate( "store" )
        .skip((result.curPage - 1) * result.eachPage) //跳转，从哪里开始查
        .limit(result.eachPage) //查询多少条
        .sort({ _id: 1 })//升序
    return result;
}
//新增宠物
module.exports.addPets = async (data) => {

    let dd= await mongoose.model("pets")
    .create(data)
    // console.log(dd)
    return await mongoose.model("pets")
    .find({_id:dd._id})
    .populate( "petsImg" )

}
//宠物修改

module.exports.upDate = async (data) => {
    return await mongoose.model("pets").update(data);
}


module.exports.updateById = async ({ _id, petsName, petsClass, petsType, petsColor, petsDate,petsGender,petsCharacter,petsPrice, petsImg,store}) => {
    return await mongoose
        .model("pets")
        .update({
            _id
        }, {
                $set: {
                    petsName, petsClass, petsType, petsColor, petsDate,petsGender,petsCharacter,petsPrice, petsImg,store
                }
            })
            .populate("petsImg")
            .populate("store")
}

//ID查找
module.exports.petsListById = async (data) => {
    return await mongoose.model("pets").find(data);
}
//删除宠物
module.exports.removePets = async(data)=>{
    // let a =await mongoose.model("store").find({pets:data._id})
    // await mongoose.model("store").remove({_id:a[0]._id})
   await mongoose.model("pets").remove({_id:data._id})
}
// 图片
module.exports.addImgs = async (data) => {
    // let data = await mongoose.model("imgs").create(msg);
    // await mongoose.model("movies").updateOne({
        console.log(data)
    return await mongoose.model("imgs").create(data);
      
}