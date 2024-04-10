const mongoose = require('mongoose');
const { Schema , model } = mongoose;

const educationSchema = new Schema({
  institution: String,
  qualification: String,
  year: String
});

const Education = mongoose.model('Education', educationSchema);

module.exports = Education;