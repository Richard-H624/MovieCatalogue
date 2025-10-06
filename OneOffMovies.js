const mongoose = require('mongoose');
const EpisodeSchema = new mongoose.Schema({
  title: String,
  poster: String,
  summary: String,
  budget: String
});
const OneOffMoviesSchema = new mongoose.Schema({
  name: String,
  episodes: [EpisodeSchema]
});
module.exports = mongoose.model('OneOffMovies', OneOffMoviesSchema);
