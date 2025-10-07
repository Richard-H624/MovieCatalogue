const mongoose = require('mongoose');

const OneOffSchema = new mongoose.Schema({
  title: String,
  poster: String,
  summary: String,
  year: Number,
  rating: Number,
  budget: Number,
  earnings: Number
});

module.exports = mongoose.model('OneOff', OneOffSchema);