const express = require('express');

const app = express();
const path =require('path'); // path is required to send file as a response

const router = express.Router();
const rootDir = require('../util/path')

router.get('/',(req,res,next)=>{
    res.sendFile(path.join(rootDir, 'views', 'contactus.html'));
})
router.post('/success',(req,res,next)=>{
    res.send('<h1>Form succesfully filled</h1>');
    
})
module.exports = router;