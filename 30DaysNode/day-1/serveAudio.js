const http = require("http")
const fs = require("fs")
const { ReadStream } = require("tty")
const PORT = 3001

http.createServer((req, res)=>{
    console.log("SERVER IS UP")
    // Setting Content-Type(MIME) to audio/mp3
    res.writeHead(200, {"Content-Type": "audio/mp3"})
    const filePath = "./test.mp3"
    fs.exists(filePath, function(exists){
        if(exists){
            var readingStream = fs.createReadStream(filePath)
            readingStream.pipe(res)
        }
        else{
            console.log("IT failed")
        }
    })
}).listen(PORT)