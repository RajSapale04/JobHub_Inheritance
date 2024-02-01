const express = require('express')

const router=express.Router()







//post one job

router.post('/:id',(req,res)=>{
    res.json({mssg:'Welcome to the job'})   
})



//delete job
router.delete('/:id',(req,res)=>{
    res.json({mssg:'Job is deleted'})
})

//update job
router.patch('/:id',(req,res)=>{
    res.json({mssg:'job updated'})
})

module.exports = router