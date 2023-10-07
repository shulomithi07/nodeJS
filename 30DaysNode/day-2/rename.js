const fs = require("fs")
const originalName = "./inputs/rename.txt"
const renamedName = "./inputs/new_renamed.txt"

const renameSyncFile = ()=>{
    fs.renameSync(originalName, renamedName)
    console.log("renameSyncFile")
}

const renameAsyncFile = ()=>{
    fs.rename(renamedName, originalName, (err)=>{
        if(err){
            console.log("Error occurred")
            throw err
        }
        console.log("Async Call")
    })
}

renameSyncFile()
renameAsyncFile()