const Forecast = require('../../models/forecast')
const { getItemById } = require('../../middleware/db')
const { handleError } = require('../../middleware/utils')

const getShared = async (req, res) => {
  try {
    // find if fetch is already in database.
    const founded = await getItemById(req.query.id, Forecast)
    if (!founded) {
      res.status(400).send({
        errors: {
          msg: 'NOT_SHARED_FOUND'
        }
      })
    } else {
      res.status(200).send(founded)
    }
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { getShared }
