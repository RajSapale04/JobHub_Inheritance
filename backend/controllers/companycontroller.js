const jwt = require('jsonwebtoken')
const Company = require('../models/companyModel')
const CompanyProfile= require('../models/companySignUp')
const Job = require('../models/postJob')
const User = require('../models/UserSignUp')
const mongoose = require('mongoose')

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

const createCompany = async (req,res)=>{
    const company_id= req.user._id
    const _id = new mongoose.Types.ObjectId(company_id)

    try {
        const companyS = await Company.findById({_id})
        const email = companyS.email
        const company = await CompanyProfile.create({...req.body,email,company_id})
        res.status(200).json(company)
    } catch (error) {
        res.status(400).json({error:error.message})
        
    }

}

const getCompany= async(req,res)=>{
    const company_id = req.user._id
    const company = await CompanyProfile.find({company_id})
    if(!company){
        return res.status(404).json({error:"no such company found"})
    }
    res.status(200).json(company)

}

const deleteCompany=async(req,res)=>{
    const company_id = req.user._id

    Job.find({company_id})
    .then((jobs)=>{
        jobs.map(async(job)=>{
            const _id=job._id
            const user= await User.updateMany({jobs:_id},{$pull:{jobs:_id}})
        })
    })
    .catch((error)=>{
        console.log(error)
    })
    const job = await Job.deleteMany({company_id})
    const companys = await Company.findOneAndDelete({_id:company_id})
    const company = await CompanyProfile.findOneAndDelete({company_id})


    if(!company){
        return res.status(404).json({error:"no such company found"})
    }
    res.status(200).json(company)
}

const updateCompany= async(req,res)=>{
    const company_id = req.user._id
    const company = await CompanyProfile.findOneAndUpdate({company_id},{
        ...req.body
    })
    if(!company){
        return res.status(404).json({error:"no such company found"})
    }
    res.status(200).json(company)

}

module.exports={
    loginCompany,
    signupCompany,
    createCompany,
    getCompany,
    deleteCompany,
    updateCompany
}
