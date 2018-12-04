//服务层
var express = require('express')
var router = express.Router()
var {
  getServeListByPage,
  addServe,
  updateServe,
  delById,
  serchServeByPage
} = require('../server/serveService.js')

//表现层
//服务列表分页 //渲染
router.get('/getServeListByPage', async function (req, res, next) {
  res.send(await getServeListByPage(req.query));
});
//新增 服务信息
router.post('/addServe', async function (req, res, next) {
  console.log(req.body)
  res.send(await addServe(req.body))
})
//修改
router.post('/updateServe', async function (req, res, next) {
  const result = await updateServe(req.body)
  // res.send()
  if (result.ok === 1) {
    res.send({
      code: 200,
      data: null,
      msg: "成功"
    })
  }
})
//删除
router.post('/delById', async function (req, res, next) {
  res.send(await delById(req.body))
})
//查询
router.get('/serchServeByPage',async function (req,res,next) {
  res.send(await serchServeByPage(req.query))
})
module.exports = router;
