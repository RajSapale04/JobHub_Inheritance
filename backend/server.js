require('dotenv').config()

const express = require('express')
const UserRoutes = require('./routes/users')
const JobRoutes = require('./routes/jobs')
const CompanyRoutes = require('./routes/companies')

const app = express()

const mongoose = require('mongoose');
const db = 'mongodb+srv://Vedant:Vedant@03@jobhub.shufb5z.mongodb.net/database?retryWrites=true&w=majority';
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true})
   .then(() => {
    app.listen(process.env.PORT, () => console.log('listening on port 3000'));
   })
   .catch((err) => console.log(err));  

app.get('/',(req,res) => res.json({mssg:'Welcome to the app'}))
