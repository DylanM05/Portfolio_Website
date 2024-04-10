const mongoose = require('mongoose');

const volunteerSchema = new mongoose.Schema({
  organization: String,
  role: String,
  startDate: String,
  endDate: String
});

const Volunteer = mongoose.model('Volunteer', volunteerSchema);

module.exports = Volunteer;
