const fs = require("fs")
const filePath = "./inputs/append.txt"
const appendText = " THIs will be appended to the file async" 

const syncAppendCall = ()=>{
    fs.appendFileSync(filePath, appendText)
    console.log("Sync Call")
}

const asyncAppendCall = ()=>{
    fs.appendFile(filePath, appendText, (err)=>{
        if(err){
            throw err
        }
        console.log("AppendFileSync Call")
    })
}

syncAppendCall()
asyncAppendCall()