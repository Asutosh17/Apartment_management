require("dotenv").config()
const jwt = require("jsonwebtoken")
const User = require("../models/manager.model")




const newToken = (user)=>{
    return jwt.sign({user},process.env.JWT_SCRT_KEY)
}

const signup = async(req,res)=>{
    try{
        let user = await User.findOne({email: req.body.email}).lean().exec()

        if(user)
            return res.status(400).send({message: "Email already exist"})

        
        user = await User.create(req.body)

        const token = newToken(user)

        res.send({user,token})
    }catch(err){
        res.status(500).send(err.message)
    }
}


const login = async(req,res)=>{
    try{

        const user = await User.findOne({email: req.body.email})

        if(!user)
        return res.status(400).send({message: "Please try with different email or password"})


        const similar = user.verifyPassword(req.body.password)

        if(!similar)
        return res.status(400).send({message: "Please try with different email or password"})


        const token = newToken(user)

        res.send({user,token})
    }catch(err){

    }
}



module.exports = {signup,login} 