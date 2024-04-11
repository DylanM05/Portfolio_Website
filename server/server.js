require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const https = require('https');
const fs = require('fs');
const path = require('path');
const Education = require('./Models/ModelEducation');
const Experience = require('./Models/ModelExperience');
const HardSkills = require('./Models/ModelHardSkills');
const SoftSkills = require('./Models/ModelSoftSkills');
const Volunteer = require('./Models/ModelVolunteer');

const key = fs.readFileSync('./certs/key.pem');
const cert = fs.readFileSync('./certs/cert.pem');
const passphrase = process.env.PASSPHRASE;
const credentials = { 
  key: key,
  cert: cert,
  passphrase: passphrase
};

app.use(cors({
  origin: 'https://localhost:3000'
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



const httpsServer = https.createServer(credentials, app);


httpsServer.listen(3001, () => {
  console.log('Server is running on https://localhost:3001');
});

