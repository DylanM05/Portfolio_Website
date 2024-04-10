const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
  company: String,
  position: String,
  startDate: String,
  endDate: String,
  responsibilities: [String]
});

const Experience = mongoose.model('Experience', experienceSchema);

module.exports = Experience;
