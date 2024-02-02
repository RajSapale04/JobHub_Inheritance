const jwt = require('jsonwebtoken')
const Company = require('../models/companyModel')
const CompanyProfile= require('../models/companySignUp')


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
    const {firstName,lastName,email,mobileNumber,companyName,registeredCountry,designation,companyVerification}=req.body
    try {
        const company = await CompanyProfile.create({firstName,lastName,email,mobileNumber,companyName,registeredCountry,designation,companyVerification,company_id})
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
    const companys = Compnay.findOneAndDelete({_id:company_id})
    const company = CompanyProfile.findOneAndDelete({company_id})
    if(!company){
        return res.status(404).json({error:"no such company found"})
    }
    res.status(200).json(company,companys)

}

const updateCompany= async(req,res)=>{
    const company_id = req.user._id
    const company = CompanyProfile.findOneAndUpdate({company_id},{
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
