const express = require('express');
const path=require('path');

const router = express.Router();
const rootDir = require('../util/path')

router.get("/",(req,res,next)=>{
    res.sendFile(path.join(rootDir, 'views', 'shop.html'))
    //res.sendFile(path.join(__dirname, '../', 'views', 'admin.html'))
    //res.send('<h1>Hello from Express js</h1>')
});

module.exports = router;