const Job = require('../models/postJob')

const postJob=async (req,res)=>{
    const company_id = req.user._id
    try {
        const job = await Job.create({...req.body,company_id})
        res.status(200).json(job)
        
    } catch (error) {
        res.status(400).json({error: error.message})
        
    }
    
}
const applyJob = async (req,res)=>{
    const user_id=req.user._id
    const {_id} = req.body
    const job = await Job.findOne({user_id:user_id})
    if(job){
        return res.status(404).json({
            error:"already applied"
        })
    }
    const jobs = await Job.findOneAndUpdate({_id},{$push:{user_id:user_id}})
    if(!jobs){
        return res.status(404).json({
            error:"no such job found"
        })
    }
    res.status(200).json(jobs)


}
const deleteJob=async(req,res)=>{
    const company_id = req.user._id
    const job = await Job.findOneAndDelete({company_id})
    if(!job){
        return res.status(404).json({error:"no such company found"})
    }
    res.status(200).json(job)

}
const updateJob= async(req,res)=>{
    const company_id = req.user._id
    const job = await Job.findOneAndUpdate({company_id},{
        ...req.body
    })
    if(job){
        return res.status(404).json({error:"no such company found"})
    }
    res.status(200).json(job)

}

module.exports={
    postJob,
    applyJob,
    deleteJob,
    updateJob
}