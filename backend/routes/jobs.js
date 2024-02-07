const express = require('express')
const {
    postJob,
    deleteJob,
    updateJob
}=require('../controllers/jobscontroller')
const router=express.Router()







//post one job

router.post('/:id',postJob)



//delete job
router.delete('/:id',deleteJob)

//update job
router.patch('/:id',(req,res)=>{
    res.json({mssg:'job updated'})
})

module.exports = router