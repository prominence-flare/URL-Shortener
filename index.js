const express = require("express");
const path= require("path");
const{connectToDB}= require('./connect');
const route= require('./routes/url');
const static=require('./routes/static');
const URL= require('./models/url');

const app=express();
const PORT=3000;

connectToDB("mongodb://127.0.0.1:27017/shorten").then(()=>console.log("MongoDB connected")).catch(error=>console.log("Error"));

app.set("view engine","ejs");
app.set("views",path.resolve("./views"));
app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use('/url',route);
app.use('/',static);



app.get('/url/:short',async (req,res)=>{
    const short=req.params.short;
    const entry=await URL.findOneAndUpdate({
        short
    },{$push:{
        history: {timestamp:Date.now(),},
    },});
    res.redirect(entry.originalUrl);

})

app.listen(PORT ,()=>console.log('Server Started'));