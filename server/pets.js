var express = require('express');
var router = express.Router();
var { petsListByPage, addPets, upDate, updateById, petsListById, removePets } = require("../server/petsServer.js");//引入服务层
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});
//宠物列表
router.get('/petsListByPage', async function (req, res, next) {
    res.send(await petsListByPage(req.query));
});
//新增宠物
router.post('/addPets', async function (req, res, next) {
    let data = req.body;
    res.send(await addPets(data));
});
//宠物修改
router.get('/upDate', async function (req, res, next) {
    res.send(await upDate(req.query));
});
router.post('/updateById', async function (req, res, next) {
    res.send(await updateById(req.body));
});
//ID查找
router.get('/petsListById', async function (req, res, next) {
    res.send(await petsListById(req.query));
});
//删除宠物
router.post('/removePets', async function (req, res, next) {
    console.log(req.body)
    res.send(await removePets(req.body));
});
module.exports = router;