const express=require('express');
const router=express.Router();
const bookcontroller=require('../controller/bookcontroller'); 



router.post('/submit',bookcontroller.addbook);


module.exports=router;