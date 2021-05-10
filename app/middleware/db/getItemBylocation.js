const { buildErrObject } = require('../../middleware/utils')

const getItemByLocation = (location = '', model = {}) => {
  return new Promise((resolve, reject) => {
    model.findOne(
      {
        location
      },
      (err, item) => {
        if (err) {
          return reject(buildErrObject(422, err.message))
        }
        resolve(item)
      }
    )
  })
}

module.exports = { getItemByLocation }
