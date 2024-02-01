const jwt = require('jsonwebtoken')
const Company = require('../models/companyModel')


const createToken=(_id)=>{
    return jwt.sign({_id},process.env.SECRETC,{expiresIn:'1d'})
}

const loginCompany = async (req,res) =>{
    const{email,password}=req.body
    try{
    const user = await Company.login(email,password)

    //create token
    const token = createToken(user._id)

    res.status(200).json({email,token})
    } catch(error){
        res.status(400).json({error: error.message})

    }
  
}

const signupCompany = async (req,res) =>{
    const {email,password}=req.body
    try{
        const user = await Company.signup(email,password)

        //create token
        const token = createToken(user._id)

        res.status(200).json({email,token})
    } catch(error){
        res.status(400).json({error: error.message})

    }
}

module.exports={
    loginCompany,
    signupCompany
}
