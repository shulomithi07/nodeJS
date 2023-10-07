# Few file methods
- The files can be modified with sync | asyn methods 
- And if it async we check for erros also
- Today I've come across 
- [READ](#READ)
- [WRITE](#WRITE)
- [APPEND](#APPEND)
- [RENAME](#RENAME)
- [DELETE](#DELETE)

## READ
- We haev sync and async method to read file with fs module
- fs.readfile("filename") --> this if for async call
- fs.readFileSync("filename) --> thist is foer async call
- [read.js](./read.js)


## WRITE
- We haev sync and async method to write file with fs module
- fs.writefile("filename") --> this if for async call
- fs.writeFileSync("filename) --> thist is foer async call
- [write.js](./write.js)

## APPEND
- We haev sync and async method to read file with fs module
- fs.appendedfile("filename") --> this if for async call
- fs.appendedFileSync("filename) --> thist is foer async call
- [append.js](./append.js)

## RENAME
- We haev sync and async method to read file with fs module
- fs.rename("filename") --> this if for async call
- fs.renameSync("filename) --> thist is foer async call
- [rename.js](./rename.js)

## DELETE
- We haev sync and async method to read file with fs module
- fs.unlink("filename") --> this if for async call
- fs.unlinkSync("filename) --> thist is foer async call
- [delete.js](./delete.js)
