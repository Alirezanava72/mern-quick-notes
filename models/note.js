const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const { Timestamp } = require('mongodb');



const noteSchema = new Schema({
    text: {type: String, required: true},
    user: {type: mongoose.Schema.Types.ObjectId, required: true}
  }, 
  
  {
    timestamps: true,
   
  });

  module.exports = mongoose.model('Note', noteSchema);