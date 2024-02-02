const express = require('express')
const {
    loginUser,
    signupUser,
    createUser,
    getUser,
    deleteUser,
    updateUser
} = require('../controllers/usercontroller')
const router=express.Router()
const {requireAuth} = require('../middleware/requireAuth')

router.post('/login',loginUser)
router.post('/signup',signupUser)
router.use(requireAuth)
router.get('/',getUser)
router.post('/:id',createUser)
router.delete('/:id',deleteUser)
router.patch('/:id',updateUser)

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