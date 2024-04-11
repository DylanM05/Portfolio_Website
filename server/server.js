require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const populateRoutes = require('./Routes/populateRoute');

app.use(cors({
  origin: 'http://localhost:3000'
}));
app.use(express.json());

app.use('/', populateRoutes);
console.log(__dirname);
const uri = process.env.MONGODB_URI;
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Successfully connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});