const express = require('express')
const User = require('../models/UserModel')
const router=express.Router()

//get user info
router.get('/',(req,res)=>{
    res.json({mssg:'Welcome to the user'})
})

//new user post
router.post('/:id',async (req,res)=>{
    const {name}=req.body
    try{
        const user = await User.create({name})
        res.status(200).json(user)

    } catch(error){
        res.status(400).json({error: error.message})

    }   
})

//delete user
router.delete('/:id',(req,res)=>{
    res.json({mssg:'user deleted'})
})

//update user
router.patch('/:id',(req,res)=>{
    res.json({mssg:'user updated'})
})

module.exports = router