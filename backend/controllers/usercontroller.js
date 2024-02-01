const User =require('../models/userModel')
const jwt = require('jsonwebtoken')

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
        const {name}=req.body
    try{
        const user = await User.create({name})
        res.status(200).json(user)

    } catch(error){
        res.status(400).json({error: error.message})

    }  
}

module.exports={
    loginUser,
    signupUser,
    createUser
}