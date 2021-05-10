const { buildErrObject } = require('../../middleware/utils')

const getItemById = (id = '', model = {}) => {
  return new Promise((resolve, reject) => {
    console.log(id)
    model.findById(id, (err, item) => {
      if (err) {
        return reject(buildErrObject(422, err.message))
      }
      resolve(item)
    })
  })
}

module.exports = { getItemById }
