const mongoose = require('mongoose')

const ForecastSchema = new mongoose.Schema({
  location: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now,
    required: true
  },
  data: {
    type: mongoose.Schema.Types.Mixed,
    required: true
  }
})
module.exports = mongoose.model('Forecast', ForecastSchema, 'forecast')
