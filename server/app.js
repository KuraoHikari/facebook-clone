const cors = require("cors")
const express = require("express")
const app = express()
const port = process.env.PORT || 3222

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.listen(port, ()=>{
    console.log("server run in port " , port)
})