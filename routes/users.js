var express = require('express');
var router = express.Router();

const { userReg, storeReg, userLogin, manageLogin } = require("../server/userServer.js")

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send("users");
  // res.send({
  //   msg: "hello"
  // });
});

// 店主注册
router.post('/userReg', async function (req, res, next) {
  res.send(await userReg(req.body));
});
//店铺注册
router.post('/storeReg', async function (req, res, next) {
  console.log(req.body)
  res.send(await storeReg(req.body));
});
//平台管理员/店主登陆
router.post('/manageLogin', async function (req, res, next) {
  res.send(await manageLogin(req.body));
});

module.exports = router;
