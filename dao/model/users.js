// 后台用户模型

const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var usersSchema = new Schema({
	//账号
	username: String,
	//密码
	password: String,
	//用户电话
	userPhone: String,
	//用户邮箱
	userMail: String,
	//用户姓名
	trueName: String,
	//用户类型
	userType: Number,
	//用户状态
	state: String,
	//地址
	userAdd: String,
	//订单
	// 商店
	storeId: {
		type: Schema.Types.ObjectId,
        ref: "stores"
	}
});

mongoose.model("users", usersSchema, "users");
