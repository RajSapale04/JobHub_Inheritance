const express = require('express')
const {
    postJob,
    deleteJob,
    updateJob,
    getUsers,
    getUser,
    removeUser,
    acceptUser,
    getJobs
}=require('../controllers/jobscontroller')

const router=express.Router()
router.post('/',postJob)
router.get('/',getJobs)
router.delete('/:id',deleteJob)
router.patch('/:id',updateJob)
router.get('/users/:id',getUsers)
router.get('/user/:id',getUser)
router.delete('/:user/:id',removeUser)
router.post('/:user/:id',acceptUser)
module.exports = router