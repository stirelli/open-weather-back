const Forecast = require('../../models/forecast')
const { createItem } = require('../../middleware/db')
const { handleError } = require('../../middleware/utils')
const fetch = require('node-fetch')

const AbortError = async (res) => {
  const error = new Error()
  error.code = res.status
  error.message = await res.json()
  return error
}

const handleErrors = async (response) => {
  if (!response.ok) {
    return Promise.reject(await AbortError(response))
  }
  return response
}

const getForecast = async (req, res) => {
  try {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${req.query.location}&appid=ded13992eed262eab9421461007c5eaf`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
      .then(handleErrors)
      .then((response) => response.json())
      .then(async (json) => {
        // save data to dabase
        res.status(200).json(
          await createItem(
            {
              location: req.query.location,
              data: json
            },
            Forecast
          )
        )
      })
      .catch((err) =>
        res.status(err.code).json({
          errors: {
            msg: err.message
          }
        })
      )
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { getForecast }
