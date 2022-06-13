const controller = require('../controllers/invoice')

module.exports = (app) => {
    app.get('/invoice', controller.getAll)
    app.post('/invoice', controller.insert)
}