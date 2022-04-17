const mongoose = require("mongoose")

const flatSchema = new mongoose.Schema({
    Type:{type:String,required:true},
    Block:{type:String,required:true},
    No:{type:Number,required:true},
    Resident:[{type:mongoose.Schema.Types.ObjectId, ref: "resident",required:true}]
},{
    versionKey:false,
    timestamps:true
})




module.exports = mongoose.model("flat",flatSchema)