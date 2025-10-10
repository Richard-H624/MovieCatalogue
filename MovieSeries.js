const mongoose = require('mongoose');
const EpisodeSchema = new mongoose.Schema({
  title: String,
  poster: String,
  summary: String,
  year: Number,
  rating: Number,
  budget: String,
  earnings: String
});
const MovieSeriesSchema = new mongoose.Schema({
  name: String,
  episodes: [EpisodeSchema]
});
module.exports = mongoose.model('MovieSeries', MovieSeriesSchema);
