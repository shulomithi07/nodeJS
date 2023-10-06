const http = require("http")
const fs = require("fs")
const PORT = 3000

http.createServer((req, res)=>{
    console.log("SERVING A PDF")
    // Changing MIME type to application/pdf
    res.writeHead(200, {"Content-Type": "application/pdf"})
    fs.readFile("./dummy.pdf", (err, data)=>{
        if(err){
            console.log(err)
            res.end(err)
        }
        res.write(data)
        res.end()
    })
}).listen(PORT)
