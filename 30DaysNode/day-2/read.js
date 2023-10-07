const fs = require("fs")
const filePath = "./inputs/read.txt"

// Reading it syncronously
const syncCall = (filePath) =>{
    const fileData = fs.readFileSync(filePath)
    console.log("CONTENT ", fileData)
}

// Reading it Asyncronously
const asyncCall  = (filePath) =>{
    fs.readFile(filePath, (err, data)=>{
        if(err){
            console.log(err)
        }
        console.log("File is read")
        console.log(data)
    })
}

syncCall(filePath)
asyncCall(filePath)