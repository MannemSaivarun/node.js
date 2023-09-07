//const http = require('http');

const express = require('express'); // npm install -g express
const bodyParser = require('body-parser');//npm install --save body-parser. it used to process the data sent to the body.  
const path = require('path');
const app = express();

app.use(bodyParser.urlencoded({extended:false}))

app.use(express.static(path.join(__dirname,'public')));//static is used to find the path for static files such as admin.css and shop.css.now we can add links inn

const adminRouter = require('./routes/admin.js');
const shopRouter  = require('./routes/shop.js');
const ContactRouter = require('./routes/contactus.js');
const exp = require('constants');

app.use('/admin', adminRouter);  // '/admin' this means that the url starting with /admin will go into adminRouter.(filtering) 

app.use('/shop', shopRouter);
app.use('/contactus',ContactRouter);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})

app.listen(4000);
// const server = http.createServer(app);

// server.listen(4000);




















































































// console.log("hello world");

// let product = (a,b) =>{
//     return a*b
// }
// console.log(product(2,3))

// const person = {
//     name:"Mark",
//     age:20,
//     greet: function(){
//         console.log("hello I am "+this.name+"my age is "+this.age)
//     }

// }
// person.greet()

// const array =['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon']


// console.log(array.map((num)=>{
//     if(num==" "){
//         return "empty string"
//     }else{
//         return num
//     }
// }))

// const http = require('http');

//const routes = require('./routes');

// const server = http.createServer(routes);
//const server = http.createServer((request,response)=>{

    // const url = request.url;
    // const method = request.method;
    
    // if(url==="/home"){
    //     response.write('<html>')
    //     response.write('<head>Welcome home</head>')
    //     response.write('<br></br>')
    //     response.write('</html>')
    //     return response.end()
    // }else if(url==="/about"){
    //     response.write('<html>')
    //     response.write('<head>Welcome to about page</head>')
    //     response.write('<br></br>')
    //     response.write('</html>')
    //     return response.end()
    // }else if(url==="/node"){
    //     response.write('<html>')
    //     response.write('<head>Welcome to my Nodejs project</head>')
    //     response.write('<br></br>')
    //     response.write('</html>')
    //     return response.end()
    // }
 
    // response.end("hi my name is varun")
//})

// server.listen(4000,"localhost",()=>{
//     console.log("hi my name varun")
// })
