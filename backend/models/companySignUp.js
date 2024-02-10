const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const validator = require('validator')

const companySchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
        validator: function (value) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        },
        message: 'Invalid email address'
      }
  },
  mobileNumber: {
    type: String,
    required: true,
    validate: {
        validator: function (value) {
          return /^[0-9]{10}$/.test(value);
        },
        message: 'Invalid mobile number'
      }
  },
  companyName: {
    type: String,
    required: true
  },
  registeredCountry: {
    type: String,
    required: true
  },

  companyVerification: {
    filename: String,
    contentType: String,
    size: Number,
    data: Buffer
  },
  company_id:{
    type:String,
    required:true
  }
},{timestamps: true});

companySchema.pre('validate', function (next) {
  const maxResumeSize = 2 * 1024 * 1024; // 2MB

  if (this.companyVerification && this.companyVerification.size > maxResumeSize) {
    return next(new Error('Resume size exceeds the limit of 2MB.'));
  }
  next();
});


module.exports = mongoose.model('CompanyProfile', companySchema);

