//const http = require('http');

const express = require('express');

const app = express();

app.use((req,res,next)=>{
    console.log("this is middle ware function")
    next();  // this next() allows request to continue to new middleware functions. 
}); //use is a express.js method which allow us to add new middlware function(argument is middleware funtion) which will run for every incoming request 

app.use((req,res,next)=>{
    console.log("this is Another middle ware function");
    res.send('<h1>Hello from Express js</h1>')
    
});
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
