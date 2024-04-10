require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const Education = require('./Models/ModelEducation');
const Experience = require('./Models/ModelExperience');
const HardSkills = require('./Models/ModelHardSkills');
const SoftSkills = require('./Models/ModelSoftSkills');
const Volunteer = require('./Models/ModelVolunteer');

app.use(cors({
  origin: 'http://localhost:3000'
}));
app.use(express.json());


app.get('/api/populate', async (req, res) => {
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
});



const uri = process.env.MONGODB_URI;
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Successfully connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));
app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});