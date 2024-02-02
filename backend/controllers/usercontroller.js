const User =require('../models/userModel')
const jwt = require('jsonwebtoken')
const UserProfile = require('../models/UserSignUp')

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

    }
}

const createUser = async (req,res)=>{
    const user_id = req.user._id
    const {firstName,lastName,email,mobileNumber,currentCity,currentCountry,workStatus,resume}=req.body
    try{
        const user = await UserProfile.create({firstName,lastName,email,mobileNumber,currentCity,currentCountry,workStatus,resume,user_id})
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
    const user_id = req.user._id
    const userS = await User.findOneAndDelete({_id:user_id})
    const user = await UserProfile.findOneAndDelete({user_id})
    if(!user){
        return res.status(404).json({error:"no such user found"})
    }
    res.status(200).json(user,userS)
}

const updateUser= async(req,res)=>{
    const user_id= req.user._id
    const user = await UserProfile.findOneAndUpdate({user_id},{
        ...req.body
    })
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