const mongoose = require('mongoose');

const hardSkillsSchema = new mongoose.Schema({
  skills: [String]
});

const HardSkills = mongoose.model('HardSkills', hardSkillsSchema);

module.exports = HardSkills;
