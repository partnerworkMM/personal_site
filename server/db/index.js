const client = require('./client')

module.exports = {
    client,
    ...require('./sites')
}