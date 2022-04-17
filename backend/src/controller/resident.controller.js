const express = require("express")
const Resident = require('../models/resident.model')

const router = express.Router()

router.post("",async(req,res)=>{
    try{
        const resident_value = await Resident.create(req.body)
        return res.status(201).send(resident_value)
    }catch(err){
        return res.status(500).send(err)
    }
})

router.get("", async(req,res) => {
    try{
        const resident_value = await Resident.find().lean().exec()
        return res.status(200).send(resident_value)
    }catch(err){
        return res.status(500).send(err)
    }
})

module.exports = router