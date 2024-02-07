const express = require('express')
const {
    postJob,
    deleteJob,
    updateJob,
    getUsers,
    getUser,
    removeUser,
    acceptUser
}=require('../controllers/jobscontroller')

const router=express.Router()
router.post('/:id',postJob)
router.delete('/:id',deleteJob)
router.patch('/:id',updateJob)
router.get('/users/:id',getUsers)
router.get('/user/:id',getUser)
router.delete('/:user/:id',removeUser)
router.post('/:user/:id',acceptUser)
module.exports = router