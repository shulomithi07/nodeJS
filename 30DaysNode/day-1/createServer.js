// Using the inbuilt http with require
const http = require("http")
const PORT = 3000

let server = http.createServer((req, res)=>{
    // Let send plain text to the device which called 
    res.writeHead(200, {"Content-Type": "text/plain"})
    // Ending the request and sending a string plan text to the device that called this server
    res.end("Server is UP")
    console.log("Hitting the Server")
})

server.listen(PORT, (err)=>{
    if(err){
        return console.log("This is coming from error ")
    }

    console.log(`LISTENING TO ${PORT}`)
})