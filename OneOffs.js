const mongoose = require('mongoose');

const OneOffSchema = new mongoose.Schema({
  title: String,
  poster: String,
  summary: String,
  year: Number,
  rating: Number,
  budget: String,
  earnings: String
});

module.exports = mongoose.model('OneOff', OneOffSchema);