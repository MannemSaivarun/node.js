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

    const url = request.url;
    if(url==="/home"){
        response.write('<html>')
        response.write('<head>Welcome home</head>')
        response.write('<br></br>')
        response.write('</html>')
        return response.end()
    }else if(url==="/about"){
        response.write('<html>')
        response.write('<head>Welcome to about page</head>')
        response.write('<br></br>')
        response.write('</html>')
        return response.end()
    }else if(url==="/node"){
        response.write('<html>')
        response.write('<head>Welcome to my Nodejs project</head>')
        response.write('<br></br>')
        response.write('</html>')
        return response.end()
    }

    
    
    response.end("hi my name is varun")
})

server.listen(4000,"localhost",()=>{
    console.log("hi my name varun")
})
