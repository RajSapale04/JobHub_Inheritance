require('dotenv').config()

const express = require('express')
const Routes = require('./routes/index')

const app = express()



app.use(Routes)


app.listen(process.env.PORT,()=>{
    console.log('listening on port 3000')
})