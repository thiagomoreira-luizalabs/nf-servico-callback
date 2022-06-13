const invoiceController = require('./invoice')
const pingController = require('./ping')

module.exports = (app) => {
    pingController(app);
    invoiceController(app);
}