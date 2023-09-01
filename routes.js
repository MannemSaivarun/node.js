const fs = require('fs');
const RequestHandler = (request,response) =>{
    const url = request.url;
    const method = request.method;
    if(url === "/"){
        fs.readFile('message.txt',{encoding: "utf-8"}, (err,data)=>{
            response.write('<html>')
            response.write('<head><title>Enter message</title></head>')
            response.write(`<body>${data}</body>`);
            response.write('<body><form action="/message" method="POST"><input type="text" name="message"><button>Send</button></form></body>')
            response.write('</html>')
            return response.end();
        })  
    }
    else if(url === "/message" && method==="POST"){
        const body=[];
        request.on('data',(chunk)=>{
            body.push(chunk);
        });
        return request.on('end',()=>{
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1]    
            fs.writeFile('message.txt', message, err=>{
                response.statusCode = 302;
                response.setHeader('Location','/');
                return response.end();
                
            });
                // response.write('<html>')
                // response.write(`<head>${message}</head>`)
                // response.write('<br></br>')
                // response.write('</html>')
                
            
        })
        
        
    }
}
module.exports = RequestHandler;

// module.exports = {RequestHandler};
// module.exports.handler = RequestHandler;
// module.exports ={
//     handler: RequestHandler
// };