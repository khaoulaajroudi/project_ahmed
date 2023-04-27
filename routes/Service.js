const express=require('express')
const servicerouter =express.Router()
const service= require('../models/Service')

// add service
servicerouter.post('/add',async(req,res)=>{
    try {
       let newservice= new service (req.body)
       let result= await newservice.save()
       res.send({service:result,msg:"new service is saved successfully"})
    } catch (error) {
       console.log(error) 
    }
})

// get all service
servicerouter.get('/all',async(req,res)=>{
    try {
       let result= await service.find()
       res.send({service:result,msg:"all service found"})
    } catch (error) {
       console.log(error) 
    }
})

// get by id
servicerouter.get('/:id',async(req,res)=>{
    try {
       let result= await service.findById({_id:req.params.id})
       res.send({service:result,msg:" service found"})
    } catch (error) {
       console.log(error) 
    }
})

// update
servicerouter.put('/:id',async(req,res)=>{
    try {
       let result= await service.findByIdAndUpdate(
        {_id:req.params.id},
        {$set:{...req.body}}
        )
       res.send({msg:" service updated"})
    } catch (error) {
       console.log(error) 
    }
})

// delete
servicerouter.delete('/:id',async(req,res)=>{
    try {
       let result= await service.findByIdAndDelete({_id:req.params.id})
       res.send({msg:" service deleted"})
    } catch (error) {
       console.log(error) 
    }
})




module.exports=servicerouter
