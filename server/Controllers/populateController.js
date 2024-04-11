const Education = require('../Models/ModelEducation');
const Experience = require('../Models/ModelExperience');
const HardSkills = require('../Models/ModelHardSkills');
const SoftSkills = require('../Models/ModelSoftSkills');
const Volunteer = require('../Models/ModelVolunteer');

exports.populateData = async (req, res) => {
  try {
    const volunteer = await Volunteer.find({});
    const education = await Education.find({});
    const experience = await Experience.find({});
    const softskills = await SoftSkills.find({});
    const hardskills = await HardSkills.find({});

    res.json({ education, experience, softskills, hardskills, volunteer });
  } catch (error) {
    console.error("Error listing users:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};