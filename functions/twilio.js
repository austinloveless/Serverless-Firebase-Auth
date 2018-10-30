const twilio = require("twilio");

const accountSid = "ACad2f1937892883906cdaebeb64d56e";

const authToken = "6b2f58e2a2879f57dc846a56f394efd";

module.exports = new twilio.Twilio(accountSid, authToken);
