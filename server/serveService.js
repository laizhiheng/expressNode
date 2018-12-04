const {getServeListByPage,addServe,updateServe,delById,serchServeByPage}= require('../dao/serveDao.js');
//分页渲染
module.exports.getServeListByPage= async (serve) =>{
  return await getServeListByPage(serve);
}
//新增
module.exports.addServe=async(serve) =>{
  return await addServe (serve)
}
//修改
module.exports.updateServe= async(serve) =>{
  const result = await updateServe(serve)
  return result
}
//删除

module.exports.delById= async(serve) =>{
  return await delById(serve);
}
module.exports.serchServeByPage = async(serve) =>{
  return await serchServeByPage(serve)
}
