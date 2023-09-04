//const http = require('http');

const express = require('express'); // npm install -g express
const bodyParser = require('body-parser');//npm install --save body-parser. it used to process the data sent to the body.  

const app = express();

app.use(bodyParser.urlencoded({extended:false}))

const adminRouter = require('./routes/admin');

const shopRouter  = require('./routes/shop');

app.use('/admin', adminRouter);  // '/admin' this means that the url starting with /admin will go into adminRouter.(filtering) 

app.use('/shop', shopRouter);

app.use((req,res,next)=>{
    res.status(404).send('<h1>Page not found</h1>')
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
