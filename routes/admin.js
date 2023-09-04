const express = require('express');

const router = express.Router();

// /admin/add-product    => GET 
router.get("/add-product",(req,res,next)=>{
    res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title" ></input><input type="number" name="size"></input><button type="submit">Add Product</button></form>')
      // this next() allows request to continue to new middleware functions. 
}); //use is a express.js method which allow us to add new middlware function(argument is middleware funtion) which will run for every incoming request 


// /admin/add-product    => POST 
router.post("/add-product", (req,res,next)=>{
    console.log(req.body);
    res.redirect("/");

})

module.exports = router;