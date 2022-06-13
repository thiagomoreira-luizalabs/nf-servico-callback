const Sequelize = require('sequelize');
const database = require('../config/db');
 
const Invoice = database.define('invoice', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    protocol: {
        type: Sequelize.STRING,
        allowNull: false
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false
    },
    callbackMessages: Sequelize.JSON
})
 
module.exports = Invoice;