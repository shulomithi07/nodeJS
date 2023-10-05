// This is about serving string to the device which called the server
const http = require("http")
const PORT = 3000

const server = http.createServer((req, res)=>{
    console.log("Create Server")
    // res.writeHead("Content-Type", "text/plain")
    res.write("Coming from the serveString.js file")
    res.end("Success")
})

server.listen(PORT, (err)=>{
    if(err){
        console.log("Error occurred")
        console.log(err)
    }
    console.log("Listing to server, port ", PORT)
})
