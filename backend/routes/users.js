const express = require('express')
const {
    loginUser,
    signupUser,
    createUser,
    getUser,
    deleteUser,
    updateUser
} = require('../controllers/usercontroller') 
const{
    applyJob,
    getCompany,
    getJob,
    unapplyJob,
    getJobs
}= require('../controllers/userjobcontroller')
const router=express.Router()
const {requireAuth} = require('../middleware/requireAuth')
router.post('/login',loginUser)
router.post('/signup',signupUser)
router.use(requireAuth)
router.get('/',getUser)
router.post('/',createUser)
router.patch('/',updateUser)
router.delete('/',deleteUser)
router.get('/company/:id',getCompany)
router.get('/jobs',getJobs)
router.delete('/jobs/:id',unapplyJob)
router.get('/jobs/:id',getJob)
router.post('/jobs/:id',applyJob)
module.exports = router