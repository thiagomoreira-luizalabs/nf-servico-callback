const controller = require('../controllers/invoice')

module.exports = (app) => {
    app.get('/invoice', controller.getAll)
    app.get('/invoice/:protocol', controller.getByProtocol)
    app.post('/invoice/callback', controller.insert)
}