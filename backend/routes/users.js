const express = require('express')

const router=express.Router()

//get user info
router.get('/',(req,res)=>{
    res.json({mssg:'Welcome to the user'})
})

//new user post
router.post('/:id',(req,res)=>{
    res.json({mssg:'data added'})
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