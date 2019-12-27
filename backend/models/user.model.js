  const mongoose = require('mongoose');

  const Schema = mongoose.Schema;

  const userSchema = new Schema({
    username: {
      type: String,
      required: true,
      unique: true,
      
    },
    gender :{
      type: String,
      required: true,
    },
    news :{
      type: Boolean,
      required: true
    },
    email:{
      type: String,
      required: true
    },
    photo :{
      type :String,
      required: true
    },
    DOB :{
      type : Date,
      required: true,
    }
  }, {
    timestamps: true,
  });

  const User = mongoose.model('users', userSchema);

  module.exports = User;