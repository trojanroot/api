//This is a module not a links 
import http from "http"

const server=http.createServer((request,response)=>{
    // console.log(response);
    console.log(response.url)
    switch(request.url){
        case '/about':
            return response.end("<h1>About Page</h1>");
        case '/contact':
            return response.end("<h1>Contact Page</h1>");
        case '/':
            return response.end("<h1>Home Page</h1>");   
        default:
            response.writeHead(404);
            return response.end("<h1>404 Page not Found</h1>");
    }

        response.writeHead(400,{
        "contain-type":"application/json",
    });

    response.end(JSON.stringify({String:"Ok"}));
    // response.writeHead(200,{
    //     "contain-type":"text/plain",
    // });
    response.write("Hello World");
    // response.end("<h1>Hello World</h1>");
});
server.listen(3000,()=>{
    console.log("Server Running at port 3000");
});//3000 is a port.