const {MongoClient} = require("mongodb")
const new_db = "mongodb://localhost:27017/";

const client = new MongoClient(new_db, {useNewUrlParser: true})

client.connect(err => {
    if (err){
        console.log(err)
        return
    }
    const db = client.db("demo_db")

    client.close()
})

// mongo.connect(new_db, (error, db)=> {
//     if (error){
//         throw error;
//     }
//     console.log("Connected to DB")
//     db.close()
// })