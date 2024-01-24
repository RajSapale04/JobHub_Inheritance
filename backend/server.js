require('dotenv').config()

const express = require('express')
const Routes = require('./routes/index')

const app = express()

// const mongoose = require('mongoose');
// const db = process.env.DBRUI;
// mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true})
//    .then(() => {
//     app.listen(process.env.PORT, () => console.log('listening on port 3000'));
//    })
//    .catch((err) => console.log(err));  

//middleware
app.use(express.json())

//routes
app.use(Routes)
// app.get('/',(req,res) => res.json({mssg:'Welcome to the app'}))
app.listen(process.env.PORT, () => console.log('listening on port',process.env.PORT));
