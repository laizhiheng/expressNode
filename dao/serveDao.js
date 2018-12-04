//持久层
var mongoose = require("mongoose");
//服务列表分页 渲染
module.exports.getServeListByPage = async ({
  curPage,
  eachPage
}) => {
  const result = {
    curPage: Number(curPage),
    eachPage: Number(eachPage)
  }
  const serveModel = mongoose.model("serves");
  result.total = await serveModel.count(); //统计总数
  result.maxPage = Math.ceil(result.total / result.eachPage); //总页数 ceil向下取整
  result.rows = await serveModel
    .find()
    // .populate("storeId")
    .skip((result.curPage - 1) * result.eachPage) //跳转 从哪里开始跳转
    .limit(result.eachPage) //查询多少条
    .sort({
      _id: -1 //升序
    })
  // console.log(result)
  return result
}


//新增
module.exports.addServe = async (serve) => {
  // console.log(serve)
  return await mongoose.model("serves").create(serve)

}
//修改
module.exports.updateServe = async ({
  _id,
  serveName,
  serveType,
  serveSchedule,
  serveCanFor,
  serveDetial,
  serveTime,
  serveLevel,
  servePrice
}) => {
  return await mongoose.model("serves").update({
    _id
  }, {
    $set: {
      serveName,
      serveType,
      serveSchedule,
      serveCanFor,
      serveDetial,
      serveTime,
      serveLevel,
      servePrice
    }
  }, (err, result) => {
    if (err) {
      console.log(err)
    } else {
      return result
    }
  })
}
//删除
module.exports.delById = async (serve) => {
  return await mongoose.model("serves").remove(serve)
}
//查询
module.exports.serchServeByPage = async({curPage,eachPage,serchText}) =>{
 const result = {
    curPage: Number(curPage),
    eachPage: Number(eachPage)
  }
  const serchArr=[]
  let reg= new RegExp(serchText,"g");
  const serchServeModel=await mongoose.model("serves").find() //查询所有数据
  serchServeModel.map(item=>{
    if(reg.test(item)){
      serchArr.push(item)
    }
  })
  result.rows=serchArr;
  result.total=serchArr.length;
  result.maxPage=Math.ceil(result.total/result.eachPage);
  return result
}
