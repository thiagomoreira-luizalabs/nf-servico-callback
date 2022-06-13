const controller = require('../controllers/ping')

module.exports = (app) => {
    app.get('/ping', controller.ping)
}