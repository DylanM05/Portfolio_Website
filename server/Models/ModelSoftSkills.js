const mongoose = require('mongoose');

const softSkillsSchema = new mongoose.Schema({
  skills: [String]
});

const SoftSkills = mongoose.model('SoftSkills', softSkillsSchema);

module.exports = SoftSkills;
