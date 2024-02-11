const express = require('express')
const JobRoutes = require('./jobs')
const {
    loginCompany,
    signupCompany,
    createCompany,
    getCompany,
    deleteCompany,
    updateCompany
}=require('../controllers/companycontroller')
const {requireAuthCompany}= require('../middleware/requireAuth')

const router=express.Router()
router.post('/login',loginCompany)
router.post('/signup',signupCompany)
router.use(requireAuthCompany)
router.get('/',getCompany)
router.use('/jobs',JobRoutes)
router.post('/',createCompany)
router.delete('/',deleteCompany)
router.patch('/',updateCompany)
module.exports = router