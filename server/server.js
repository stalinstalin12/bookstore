const express=require('express')
const dotenv = require('dotenv');
dotenv.config();
const app=express();

const mongoConnect=require('./db/connect')

app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.use(express.static('client'));

app.use('/',require('../server/router/bookrouter'))

mongoConnect();



app.listen(process.env.PORT,()=>{
    console.log(`Server running at http://localhost:${process.env.PORT}`)
});
