const jwt = require('jsonwebtoken')
const User = require('../models/userModel')
const Company = require('../models/companyModel')
// const { compareSync } = require('bcrypt')

const requireAuth = async (req,res,next)=>{

    //verify authentication
    const{authorization} =req.headers

    if(!authorization){
        return res.status(401).json({error:'Authorization  token required'})
    }

    const token = authorization.split(' ')[1]

    try {
        const {_id}=jwt.verify(token, process.env.SECRET)
        req.user = await User.findOne({_id}).select('_id')
        next()
        
    } catch (error) {
        console.log(error)
        res.status(401).json({error:'Request not hehe authorized'})
        
    }





}
const requireAuthCompany = async (req,res,next)=>{

    //verify authentication
    const{authorization} =req.headers

    if(!authorization){
        return res.status(401).json({error:'Authorization company token required'})
    }

    const token = authorization.split(' ')[1]

    try {
        const {_id}=jwt.verify(token, process.env.SECRETC)
        req.user = await Company.findOne({_id}).select('_id')
        next()
        
    } catch (error) {
        console.log(error)
        res.status(401).json({error:'Request not authorized'})

        
    }





}
module.exports={
    requireAuth,
    requireAuthCompany

}