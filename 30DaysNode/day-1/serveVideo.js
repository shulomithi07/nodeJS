const http = require("http")
const fs = require("fs")
const PORT = 3002

http.createServer((req, res)=>{
    console.log("VIDEO FORMAT LOADING UP")
    // Updating the mime to video/mp4
    res.writeHead(200, {"Content-Type": "video/mp4"})
    filePath = "./video.mp4"
    fs.exists(filePath, (exists)=>{
        if(exists){
            var readingStream = fs.createReadStream(filePath)
            readingStream.pipe(res)
        }
        else{
            res.end("THIS IS ERROR FrOM collapese")
        }
    })
}).listen(PORT)