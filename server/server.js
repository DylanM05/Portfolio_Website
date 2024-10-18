require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const rateLimit = require("express-rate-limit");
const populateRoutes = require('./Routes/populateRoute');
const PORT = process.env.PORT || 3001;
const allowedOrigins = ['http://localhost:3000', 'https://dylanmcmullen.vercel.app', '98.124.27.85'];
const contactRoutes = require('./Routes/contactRoute');

const apiLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5 // limit each IP to 5 requests per windowMs
});


app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));
app.use(express.json());

app.use('/', populateRoutes);
app.use('/contact', apiLimiter, contactRoutes);


const uri = process.env.MONGODB_URI;
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Successfully connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));


app.listen(PORT, () => {
  console.log('Server is running on http://localhost:3001');
});