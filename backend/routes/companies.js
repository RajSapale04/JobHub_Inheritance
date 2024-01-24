const express = require('express')

const router=express.Router()

//get company profile
router.get('/',(req,res)=>{
    res.json({mssg:'Welcome to the company'})
})

//new company data post
router.post('/:id',(req,res)=>{
    res.json({mssg:"added comp data"})
})

//delete company
router.delete('/:id',(req,res)=>{
    res.json({mssg:"company deleted"})
})

//update company
router.patch('/:id',(req,res)=>{
    res.json({mssg:'company updated'})
})
module.exports = router