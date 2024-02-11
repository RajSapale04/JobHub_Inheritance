const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const validator = require('validator')

const postJob = new mongoose.Schema({
  jobTitle: {
    type: String,
    required: true
  },
  companyName: {
    type: String,
    required: true
  },
  minSalary: {
    type: Number,
    required: true
  },
  maxSalary: {
    type: Number,
    required: true
  },
  education: {
    type: String,
    required: true
  },
  experience: {
    type: String,
    required: true
  },
  jobType: {
    type: String,
    required: true
  },
  vacancies: {
    type: Number,
    required: true
  },

  country: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },

  jobDescription: {
    type: String,
    required: true
  },

  company_id:{
    type: String,
    required: true
  },
  user_id:[String]

},{timestamps: true });

module.exports = mongoose.model('Job', postJob);