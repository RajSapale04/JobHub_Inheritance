const express = require('express')

const router=express.Router()


router.get('/',(req,res)=>{
    res.json({mssg:'Welcome to the company'})
})

module.exports = router