const cors = require("cors")
const express = require("express")
const router = require("./routes/index")
require('dotenv').config();
const app = express()
const port = process.env.PORT || 3222

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/api", router)

app.listen(port, ()=>{
    console.log("server run in port " , port)
})