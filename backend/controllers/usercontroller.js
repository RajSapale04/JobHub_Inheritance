const User =require('../models/userModel')
const jwt = require('jsonwebtoken')
const UserProfile = require('../models/UserSignUp')
const Job = require('../models/postJob')
const mongoose = require('mongoose')


const createToken=(_id)=>{
    return jwt.sign({_id},process.env.SECRET,{expiresIn:'1d'})
}

const loginUser = async (req,res) =>{
    const{email,password}=req.body
    try{
    const user = await User.login(email,password)

    //create token
    const token = createToken(user._id)

    res.status(200).json({email,token})
    } catch(error){
        res.status(400).json({error: error.message})

    }
  
}

const signupUser = async (req,res) =>{
    const {email,password}=req.body
    try{
        const user = await User.signup(email,password)

        //create token
        const token = createToken(user._id)

        res.status(200).json({email,token})
    } catch(error){
        res.status(400).json({error: error.message})
        console.log(error)

    }
}

const createUser = async (req,res)=>{
    const user_id = req.user._id
    const _id = new mongoose.Types.ObjectId(user_id)
 
    try{
        const userS = await User.findById({_id})
        const email = userS.email
        const user = await UserProfile.create({...req.body,email,user_id})
        res.status(200).json(user)

    } catch(error){
        res.status(400).json({error: error.message})

        
    }  
}
const getUser = async(req,res)=>{
    const user_id = req.user._id
    const user = await UserProfile.find({user_id})
    if(!user){
        return res.status(404).json({error:"no such user found"})
    }
    res.status(200).json(user)
}
const deleteUser=async(req,res)=>{
    try {
        
    
    const user_id = req.user._id
    const job = await Job.updateMany({user_id:user_id},
    {$pull:{user_id}})
    const userS = await User.findOneAndDelete({_id:user_id})
    const user = await UserProfile.findOneAndDelete({user_id})      
    console.log(user,userS)
    if(!userS){
        return res.status(404).json({error:"no such user found"})
    }
    res.status(200).json(userS)   
    } catch (error) {   
        res.status(200).json({error:error.message})
        
    }
}
 
const updateUser= async(req,res)=>{
    const user_id= req.user._id
    console.log(user_id)
    const user = await UserProfile.findOneAndUpdate({user_id},{
        ...req.body
    },{new:true})
    if(!user){
        return res.status(404).json({error:"no such user found"})
    }
    res.status(200).json(user)
}


module.exports={
    loginUser,
    signupUser,
    createUser,
    getUser,
    deleteUser,
    updateUser
}