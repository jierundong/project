const express=require("express");
const pool=require("../pool.js");
var router=express.Router();
router.post('/api/v1/register2/',function(req,res){
 var $uname=req.body.uname;
	 pool.query('select*from art_user where uname=?',[$uname],function(err,result){
	 if(result.length>0)
	 {
		res.send("0");
	 }
	 else
	 {
	    res.send("1")
	 }
		 
	   
	 });
 
 });
 router.post('/api/v1/register3',function(req,res){
  var obj=req.body;
	console.log(obj)
  pool.query('insert into art_user set ?',[obj],function(err,result){
			if (err) throw err;
			
			console.log(result);
			
			
			if (result.affectedRows>0)
			{
			res.send('1');
			}
			
 })
 })
	router.get('/api/v1/login1/:uname&:upwd',(req,res)=>{
  var $uname=req.params.uname;
  var $upwd=req.params.upwd;
  pool.query('select *from art_user where uname=?and upwd=?',[$uname,$upwd],(err,result)=>{
    if (err)throw err;
    console.log(result)
    if (result.length>0)
    {
    res.send("1")
    }
    else
    {
    res.send("0")
    }
  })
});
	router.put('/api/v1/updateuser1/',function(req,res){
	var obj=req.body;
	for (var key in obj)
	{
		if (!obj[key])
		{
			res.send(key+"不能为空")
				return
		}
	}
	pool.query('update art_user set ? where uid=?',[obj,obj.uid],(err,result)=>{
	if (err)throw err
		console.log(result)
		if (result.affectedRows>0)
		{
		 res.send('修改成功')
		}
		 else{res.send('修改失败')}
	
	})
	})
		router.get("/v1/userlist",(req,res)=>{
var sql="select*from art_user";
pool.query(sql,(err,result)=>{
if (err)throw err;
console.log(result);
res.send(result);



})
})
	router.get('/api/v1/searchuser/:uid',function(req,res){
	var $uid=req.params.uid;
	pool.query('select*from art_user where uid=?',[$uid],(err,result)=>{
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
router.delete('/api/v1/deluser/:uid',function(req,res){
  var $uid=req.params.uid;
	console.log($uid)
	pool.query('delete from art_user where uid=?',[$uid],function(err,result){
		if (err)throw err;
		if (result.affectedRows>0)
			{
			res.send('1')
			}
		else
			{
			res.send('0')
			}	
	})

})
		module.exports=router;