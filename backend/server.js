require('dotenv').config()

const express = require('express')
const UserRoutes = require('./routes/users')
const JobRoutes = require('./routes/jobs')
const CompanyRoutes = require('./routes/companies')

const app = express()




app.get('/',(req,res)=>{
    res.json({mssg:'Welcome to the app'})
})


app.listen(process.env.PORT,()=>{
    console.log('listening on port 3000')
})