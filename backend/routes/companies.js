const express = require('express')
const JobRoutes = require('./jobs')
const {
    loginCompany,
    signupCompany
}=require('../controllers/companycontroller')
const {requireAuthCompany}= require('../middleware/requireAuth')

const router=express.Router()

//login route

router.post('/login',loginCompany)

//signup route
router.post('/signup',signupCompany)

router.use(requireAuthCompany)

//get company profile
router.get('/:id',(req,res)=>{
    res.json({mssg:'Welcome to the company'})
})

router.use('/jobs',JobRoutes)

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