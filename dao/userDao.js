const mongoose = require("mongoose")

// 店主注册,userType平台管理员0，店主是1
module.exports.userReg = async obj => {
    const { username, password, userPhone, userMail, trueName, userType, state, userAdd } = obj
    let data = await mongoose
        .model("users").create({ username, password, userPhone, userMail, trueName, userType: 1, state: 0, userAdd })
    return data._id
}
//店铺注册
module.exports.storeReg = async obj => {
    const { storeName, shopName, shopLIcenceImg, shopCorporate, shopAdd, shopTel, usersId, grade } = obj
    let data = await mongoose.model("stores")
        .create({ storeName, shopName, shopLIcenceImg, shopCorporate, shopAdd, shopTel, usersId, grade })
    let dd = await mongoose.model("stores").find({ _id: data._id }).populate("usersId") //关联用户    
    return dd
}
//平台管理员/店主登陆
module.exports.manageLogin = async obj => {
    const { username, password } = obj
    let data = await mongoose.model("users").find({ username, password });
    console.log(data.length)
    if (data.length == 1) {
        return { isOk: true, userType: data[0].userType }//判断userType
    } else {
        return { isOk: false }
    }
}