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
    applyJob
}= require('../controllers/jobscontroller')
const router=express.Router()
const {requireAuth} = require('../middleware/requireAuth')
router.post('/login',loginUser)
router.post('/signup',signupUser)
router.use(requireAuth)
router.get('/',getUser)
router.post('/:id',createUser)
router.patch('/:id',updateUser)
router.delete('/:id',deleteUser)
router.get('/jobs',(req,res)=>{
    res.json({mssg:'Welcome to all the jobs'})
})
router.get('/jobs/:id',(req,res)=>{
    res.json({mssg:'Welcome to the job'})   
})
router.post('/jobs/:id',applyJob)
module.exports = router