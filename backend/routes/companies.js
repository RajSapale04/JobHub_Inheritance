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
router.get('/:id',getCompany)
router.use('/jobs',JobRoutes)
router.post('/:id',createCompany)
router.delete('/:id',deleteCompany)
router.patch('/:id',updateCompany)
module.exports = router