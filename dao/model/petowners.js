const mongoose = require("mongoose")

const petSchema = new mongoose.Schema({
    memberUser:String,
    memberPwd:String,
    //电话号码
    memberPhone: String,
    //昵称
    memberAcout: String,
    //真实姓名
    memberName: String,
    //会员卡
    memberCard: String,
    //头图
    memberImg: String,
    //送货地址
    memberAdd: String,
  //区域
    memberArea: String,
    //积分
    memberPoint: String,
    //拥有的宠物
    memerpets: {
        type: Schema.Types.ObjectId,
        ref: "pets"
    }
})

mongoose.model("emp", petSchema, "emps")