const express = require('express')
const {
    loginUser,
    signupUser,
    createUser
} = require('../controllers/usercontroller')
const router=express.Router()
const {requireAuth} = require('../middleware/requireAuth')

//login route

router.post('/login',loginUser)

//signup route
router.post('/signup',signupUser)

//require auth 
router.use(requireAuth)

//get user info
router.get('/',(req,res)=>{
    res.json({mssg:'Welcome to the user'})
})

//new user post
router.post('/:id',createUser)

//delete user
router.delete('/:id',(req,res)=>{
    res.json({mssg:'user deleted'})
})

//update user
router.patch('/:id',(req,res)=>{
    res.json({mssg:'user updated'})
})

//get all jobs
router.get('/jobs',(req,res)=>{
    res.json({mssg:'Welcome to all the jobs'})
})

//get one job
router.get('/jobs/:id',(req,res)=>{
    res.json({mssg:'Welcome to the job'})   
})

//apply job
router.post('/jobs/id',(req,res)=>{
    res.json({mssg:'applied for job'})
})

module.exports = router