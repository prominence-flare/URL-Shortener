const express = require("express");

const {generate, analyze}= require("../controllers/url");

const router=express.Router();

router.post('/',generate);

router.get('/analytics/:short',analyze);

module.exports= router;