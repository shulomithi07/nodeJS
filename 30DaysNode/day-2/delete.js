const fs = require("fs")
const filePath = "./inputs/test.txt"

// Sync Delete
const Delete = ()=>{
    fs.unlink(filePath, (err)=>{
        if(err){
            throw err
        }
    })
}

// Async Delete
const deleteSync = ()=>{
    fs.unlinkSync(filePath)
}

Delete()
deleteSync()