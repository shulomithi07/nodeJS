const http = require("http")
const PORT = 3000


const server = http.createServer((req, res)=>{
    res.writeHead(200, {"Content-Type": "application/json"})
    jsonData = {
        "Test": true,
        "random": "test"
    }
    res.end(JSON.stringify(jsonData))
})


server.listen(PORT, (error)=>{
    if (error){
        console.log("THIS IS ERROR")
    }
    console.log("APP RUNNING at 300")
})