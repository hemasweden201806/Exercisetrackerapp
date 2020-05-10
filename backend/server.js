const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');//connect to mongdb
//require('dotenv').config({path: __dirname + '/.env'})

require('dotenv').config();//Use .env file
const app=express();
const port=process.env.PORT  || 5000;
app.use(cors());
app.use(express.json());
const uri=process.env.ATLAS_URI;//For the connection to work....
//We start our connection here...
mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true});
const connection=mongoose.connection;
connection.once('open',()=>{
    console.log("Mongoose DB connection established successfully");
})
app.listen(port,()=>
{

    console.log("Server is running on port:${port}");
}

);