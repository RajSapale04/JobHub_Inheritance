const Job = require('../models/postJob')
const UserProfile = require('../models/UserSignUp')
const Company=require('../models/companySignUp')

const applyJob = async (req,res)=>{
    const user_id=req.user._id
    const _id= req.params['id']
    const job = await Job.findOne({_id})

    if(job){
        const fjob= job.user_id.includes(user_id)
        if(fjob){           
            return res.status(404).json({error:"job already applied"})
        }
        const jobs = await Job.findOneAndUpdate({_id},{$push:{user_id}},{new:true})
        const user = await UserProfile.findOneAndUpdate({user_id},{$push:{jobs:_id}})
        res.status(200).json(jobs)
    }
    else{
        return res.status(404).json({
            error:"no such job found"
        })
    }
   


}

const getCompany =async(req,res)=>{
    const company_id = req.params['id']
    const company = await Company.find({company_id})
    if(!company){
        return res.status(404).json({
            error:"Company not found"
        })
    }
    res.status(200).json(company)
}
const getJob =async(req,res)=>{
    const _id = req.params['id']
    const job = await Job.find({_id})
    if(!job){
        return res.status(404).json({
            error:"Company not found"
        })
    }
    res.status(200).json(job)
}

const unapplyJob = async (req,res)=>{
    const user_id=req.user._id
    const _id= req.params['id']
    const job = await Job.findOneAndUpdate({_id},{$pull:{user_id}},{new:true})
    const user = await UserProfile.findOneAndUpdate({user_id},{$pull:{jobs:_id}})

    if(!job){
        return res.status(404).json({
            error:"no such job found"
        })

    }
    res.status(200).json(job)


}
const getJobs =async(req,res)=>{
    const job = await Job.find()
    console.log(job)
    if(!job){
        return res.status(404).json({
            error:"Company not found"
        })
    }
    res.status(200).json(job)
}



module.exports={
    applyJob,
    getCompany,
    getJob,
    unapplyJob,
    getJobs
}