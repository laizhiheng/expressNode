var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
// 用户
require("./model/users.js");
// 门店
require("./model/store.js");
// 服务
require("./model/serve.js");
// 宠物
require("./model/pets.js");
// 宠物主
// require("./model/petowners.js");
// 商品杂物
require("./model/commodity.js");
// 图片
require("./model/imgs.js");

var dbURI = 'mongodb://localhost/aicongbang';

mongoose.connect(dbURI,{ useNewUrlParser: true });

mongoose.connection.on('connected', function () {
  console.log('Mongoose connected to ' + dbURI);
});