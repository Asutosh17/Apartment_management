const express = require("express")
const {signup,login} = require("./controller/auth.controller")
const Resident = require("./controller/resident.controller")
const flat = require("./controller/flat.controller")

const app = express()
app.use(express.json())

const connect = require("./configs/db")


app.post("/signup",signup)
app.post("/login",login)

app.use('/resident',Resident)

app.use("/flat",flat)

app.listen(5000,async() => {
    try{
        await connect()
        console.log("listening to the port 5000")
    }catch(err){
        console.log(err)
    }
})