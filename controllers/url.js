const shortid= require("shortid");
const URL=require("../models/url");


async function generate(req,res){
    const body=req.body;
    if(!body.url)return res.status(400).json({error:'URL is required'})
    const short=shortid();
    await URL.create({
        short:short,
        originalUrl: body.url,
        history:[],
    });

    return res.render('home',{id:short});

    

}

async function analyze(req,res){
    const short=req.params.short;
    const out=await URL.findOne({short});
    return res.json({
        NoOfClicks: out.history.length,
        analytics: out.history,});

};

module.exports = {generate,analyze,}