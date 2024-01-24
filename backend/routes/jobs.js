const express = require('express')

const router=express.Router()


//get all jobs
router.get('/',(req,res)=>{
    res.json({mssg:'Welcome to all the jobs'})
})


//get one job
router.get('/:id',(req,res)=>{
    res.json({mssg:'Welcome to the job'})   
})

//post one job

router.post('/:id',(req,res)=>{
    res.json({mssg:'Welcome to the job'})   
})

//get job
router.get('/:id',(req,res)=>{
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