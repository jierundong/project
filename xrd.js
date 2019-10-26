const express=require('express');
const userRouter=require('./routes/user.js');
const productRouter=require('./routes/product.js');
const bodyParser=require('body-parser')
var xrd=express();
xrd.listen(8084);
xrd.use(bodyParser.urlencoded({
extended:false
}));
xrd.use(express.static('./css'));
xrd.use(express.static('./img'));
xrd.use(express.static('./js'));
xrd.use(express.static('./public'));
xrd.use(express.static('./HTML'));
xrd.use('/user',userRouter);
xrd.use('/product',productRouter);