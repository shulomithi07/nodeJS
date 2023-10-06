const http = require("http")
const fs = require("fs")
const PORT = 3000

// const server = http.createServer((req, res)=>{
//     console.log("This is hit")
//     res.writeHead(200, {"Content-Type": 'text/html' })
//     // Reading the data from html file
//     fs.readFile("./index.html", (err, data)=>{
//         if (err){
//             console.log(err, "THIS IS ERROR")
//             res.end("ERROR OCCURRED")
//         }
//         res.end(data)

//     })
// })

// server.listen(PORT, ()=>{
//     console.log(`THE CODE IS UP AT ${PORT}`)
// })


// Directly without variable we are listening to port 3000
http.createServer((req, res)=>{
            console.log("This is hit")
            res.writeHead(200, {"Content-Type": 'text/html' })
            // Reading the data from html file
            fs.readFile("./index.html", (err, data)=>{
                if (err){
                    console.log(err, "THIS IS ERROR")
                    res.end("ERROR OCCURRED")
                }
                res.end(data)
        
            })
        }).listen(3000)