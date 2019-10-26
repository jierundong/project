const express=require("express");
const pool=require("../pool.js");
var router=express.Router();
//	router.get("/v1/productlist",(req,res)=>{
//	var sql="select*from product_details";
//	pool.query(sql,(err,result)=>{
//	if (err)throw err;
//	console.log(result);
//	res.send(result);
//	})
//	})
//	router.get('/api/v1/details/:pid',function(req,res){
//  var $pid=req.params.pid;
//	console.log($pid)
//	pool.query('select from product_details where pid=?',[$pid],function(err,result){
//		if (err)throw err;
//		if (result.affectedRows>0)
//			{
//			res.send(result)
//			}
//		else
//			{
//			res.send('0')
//			}	
//	})
//
//})
router.get('/api/v1/searchuser/:pid',function(req,res){
	var $pid=req.params.pid;
	pool.query('select*from product_details where pid=?',[$pid],(err,result)=>{
	if (err)throw err;
		console.log(result)
	if (result.length>0)
	{
		res.send(result)
	}
	else
		{
    res.send('该用户编号不存在')
		}
	
	})

})
	
		module.exports=router;