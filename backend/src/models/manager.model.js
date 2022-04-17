const mongoose = require("mongoose")
const bcrypt = require("bcryptjs");



const ManagerSchema = new mongoose.Schema({
    email : {type:String, required:true},
    password : {type:String, required:true},
    userName:{type:String, required:true},
}, {

versionKey:false,
timestamps:true

})

ManagerSchema.pre("save",function(next){
    if(! this.isModified("password")) return next()


    let hash = bcrypt.hashSync(this.password,8)
    this.password = hash
    return next()
})


ManagerSchema.methods.verifyPassword = function(password){
    return bcrypt.compareSync(password,this.password)
}



module.exports = mongoose.model("user", ManagerSchema)
