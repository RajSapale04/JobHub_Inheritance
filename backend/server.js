require('dotenv').config()

const express = require('express')
const Routes = require('./routes/index')
const cors = require('cors')
const app = express()

const mongoose = require('mongoose');


app.use(cors())
app.use(express.json())

app.use(Routes)

const db = process.env.MONG_URI;
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true})
   .then(() => {
    app.listen(process.env.PORT, () => console.log('connected to db and listening on port ',process.env.PORT));
   })
   .catch((err) => console.log(err));  
