const express = require("express")
const router = express.Router()

const flat = require("../models/flat.model")



router.post("", async(req,res)=>{
    try{
        const flat_val = await flats.create(req.body)
        return res.status(200).send(flat_val)
    }catch(err){
        return res.status(500).send(err.message)
}
});



router.get("",async(req,res)=>{
    try{
        const flat_val = await flat.find().lean().exec()
        return res.status(200).send(flat_val)
    }catch(err){
        return res.status(500).send(err.message)
    }
})


module.exports = router