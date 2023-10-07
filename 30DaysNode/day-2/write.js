const fs = require("fs")
const filePath = "./inputs/append.txt"
const data = "This is the data which is going to be dumped"

// Write data to file
const syncWriteCall = ()=>{
    fs.writeFileSync(filePath, data);
    console.log("SYNC CALL")
}

const asyncWriteCall = ()=>{
    fs.writeFile(filePath, data, (err)=>{
        if(err){
            console.log(err)
            throw err
        }
        console.log("IT IS SAVED TO FILE")
    });
}

syncWriteCall()
asyncWriteCall()

