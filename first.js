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


const http = require('http');
const server = http.createServer((request,response)=>{
    response.writeHead("200");
    response.end("hi my name is varun")
})

server.listen(4000,"localhost",()=>{
    console.log("hi my name varun")
})
