// This method can be used in 2 ways it can add and delete as well


arr = [1,4,2,3,5,6,7,8]
console.log(arr)
arr.splice(4, 1,"added")
console.log(arr)

arrStr = ['f','w','r','t','y','a','e','t','w','f','h','a','l']
console.log(arrStr)
arrStr.splice(2,5, "test", "random", "test1", "test2", "test3")
console.log(arrStr)


// Delete
arr.splice(4,1)
console.log(arr)