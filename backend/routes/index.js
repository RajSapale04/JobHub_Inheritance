const express = require('express')


const router=express.Router()
const UserRoutes = require('./users')
const JobRoutes = require('./jobs')
const CompanyRoutes = require('./companies')


router.use('/user',UserRoutes)
router.use('/jobs',JobRoutes)
router.use('/company',CompanyRoutes)

router.get('/',(req,res)=>{
    res.json({mssg:'Welcome to the app'})
})







module.exports = router