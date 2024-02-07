const Job = require('../models/postJob')
const UserProfile = require('../models/UserSignUp')

const postJob=async (req,res)=>{
    const company_id = req.user._id
    try {
        const job = await Job.create({...req.body,company_id})
        res.status(200).json(job)
        
    } catch (error) {
        res.status(400).json({error: error.message})       
    }
    
}

const deleteJob=async(req,res)=>{
    const _id=req.params['id']
    const user= await UserProfile.updateMany({jobs:_id},{$pull:{jobs:_id}})
    const job = await Job.findOneAndDelete({_id})
    if(!job){
        return res.status(404).json({error:"no such company found"})
    }
    res.status(200).json(job)

}
const updateJob= async(req,res)=>{
    const company_id = req.params['id']
    const job = await Job.findOneAndUpdate({company_id},{
        ...req.body
    })
    if(job){
        return res.status(404).json({error:"no such company found"})
    }
    res.status(200).json(job)

}

const getUsers = async(req,res)=>{
    const _id = req.params['id']
    const user = await UserProfile.find({jobs:_id})
    if(!user){
        return res.status(404).json({error:"no users found"})
    }
    res.status(200).json(user)
}

const getUser =async(req,res)=>{
    const user_id = req.params['id']
    const user = await UserProfile.find({user_id})
    if(!user){
        return res.status(404).json({
            error:"User not found"
        })
    }
    res.status(200).json(user)
}

const removeUser = async(req,res)=>{
    try {
        
    
    const user_id = req.params['user']
    const _id = req.params['id']
    const job= await Job.findOneAndUpdate({_id},{$pull:{user_id}},{new:true})
    const user= await UserProfile.updateMany({jobs:_id},{$pull:{jobs:_id}})
    res.status(200).json(job)
    }
     catch (error) {
        res.status(400).json({error:error.message})
        
    }

}

const acceptUser= async(req,res)=>{
        try {
        
    
    const user_id = req.params['user']
    const _id = req.params['id']
    const job= await Job.findOneAndUpdate({_id},{$pull:{user_id},$inc:{vacancies:-1}},{new:true})
    const user= await UserProfile.updateMany({jobs:_id},{$pull:{jobs:_id},$push:{acceptedJobs:_id}})
    res.status(200).json(job)
    }
     catch (error) {
        res.status(400).json({error:error.message})
        
    }


}


module.exports={
    postJob,
    deleteJob,
    updateJob,
    getUsers,
    getUser,
    removeUser,
    acceptUser
}