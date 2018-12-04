var express = require('express');
var router = express.Router();
require("../dao/model/commodity.js");


const { commodityAll, addCommodity, addCommodityImg ,commdityUpdata,removeCommdity} = require("../server/commodityServer.js");
const { uploadFile } = require("../util/upload.js")

//列表
router.get('/commodityAll', async function (req, res, next) {
    res.send(await commodityAll(req.query));
});
//新增
router.post('/addCommodity', async function (req, res, next) {
    let data = req.body;
    res.send(await addCommodity(data));
});
//上传图片
router.post('/addCommodityImg', async function (req, res, next) {
    const { ssuccess ,data } = await uploadFile(req,res,{
        // 目录
        fileType:"",
        // 路径
        path:"./public/images"
    })
    res.send(await addCommodityImg(data));
});
//修改
router.post('/commdityUpdata', async function (req, res, next) {
    console.log(req.body)
    res.send(await commdityUpdata(req.body));
});
//删除
router.post('/removeCommdity', async function (req, res, next) {
    res.send(await removeCommdity(req.body));
});


module.exports = router;