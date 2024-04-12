require('dotenv').config();
const { Twilio } = require('twilio');

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = new Twilio(accountSid, authToken);

const sendText = (req, res) => {
  const to = process.env.MY_PHONE_NUMBER; // Your phone number
  const from = process.env.TWILIO_PHONE_NUMBER; // Your Twilio number
  const body = req.body.message;

  client.messages
    .create({ from, to, body })
    .then((message) => {
      res.json({ success: true, sid: message.sid });
    })
    .catch((err) => {
      res.json({ success: false, error: err.message });
    });
};





module.exports = {
  sendText,
};