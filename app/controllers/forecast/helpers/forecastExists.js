const Forecast = require('../../../models/forecast')
const { buildErrObject } = require('../../../middleware/utils')

const forecastExists = (location = '') => {
  return new Promise((resolve, reject) => {
    Forecast.findOne(
      {
        location
      },
      (err, item) => {
        if (err) {
          return reject(buildErrObject(422, err.message))
        }

        if (item) {
          return reject(buildErrObject(422, 'FORECAST_ALREADY_EXISTS'))
        }
        resolve(false)
      }
    )
  })
}

module.exports = { forecastExists }
