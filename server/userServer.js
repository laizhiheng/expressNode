const { userReg, storeReg, userLogin, manageLogin } = require("../dao/userDao.js")

// 店主注册
module.exports.userReg = async obj => {
    return await userReg(obj)
}
// 店铺注册
module.exports.storeReg = async obj => {
    return await storeReg(obj)
}
//平台管理员/店主登陆
module.exports.manageLogin = async obj => {
    return await manageLogin(obj)
}
