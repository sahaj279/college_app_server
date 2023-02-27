const dotenv=require('dotenv');
dotenv.config({path:'./config/config.env'})

//IMPORTS
const express=require('express');
const cors=require('cors');
const bodyparser=require('body-parser')

//MODULE EXPORTS
const authRouter=require('./routes/auth_routes')

//INITIALIZATIONS
const app=express();
const PORT=5000;

//MIDDLEWARES
app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({extended:true}))

//HOME ROUTE
app.get('/',(req,res)=>{
    res.json({'welcome':'page'});
})

//ROUTER
app.use(authRouter)

//SERVER 
app.listen(PORT,()=>{
    console.log(`server started at port ${PORT}`)
})