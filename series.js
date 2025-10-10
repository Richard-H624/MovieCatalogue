const mongoose = require('mongoose');
const TVSeriesSchema = new mongoose.Schema({
  name: String,
  episodes: [
    {
      title: String,
      poster: String,
      summary: String,
      rating: Number
    }
  ]
});
module.exports = mongoose.model('Series', TVSeriesSchema);
