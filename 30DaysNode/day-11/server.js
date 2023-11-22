const bodyParser = require("body-parser")
const express = require("express")
const app = express()

app.use(express.static("./"))
app.use(bodyParser.json())
app.get("/", (req, res)=>{
    res.send("./index.html")
})

app.post("/signup", (req, res)=>{
    console.log(req.body)
    console.log(req.query)
    res.send("SIGNUP is HIT")
})

app.listen(3000, () => {
    console.log("Server is up listening at 3000")
})