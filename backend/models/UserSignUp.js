const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const validator = require('validator')

const userSchema = new mongoose.Schema({
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
  password: {
    type: String,
    required: true,
    minlenght: 6
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
  currentCity: {
    type: String,
    required: true
  },
  currentCountry: {
    type: String,
    required: true
  },
  workStatus: {
    type: String,
    enum: ['experienced', 'fresher'],
    required: true
  },
  resume: {
    filename: String,
    contentType: String,
    size: Number,
    data: Buffer
  }
},{timestamps: true});

userSchema.pre('validate', function (next) {
  const maxResumeSize = 2 * 1024 * 1024; // 2MB

  if (this.resume && this.resume.size > maxResumeSize) {
    return next(new Error('Resume size exceeds the limit of 2MB.'));
  }
  next();
});


module.exports = mongoose.model('User', userSchema);

