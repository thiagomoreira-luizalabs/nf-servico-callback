const Model = require('../models/invoice')

module.exports = {
    getAll,
    insert
}

async function getAll(request, response) {
    const invoices = await Model.findAll();
    invoices.forEach(i => i.callbackMessages = JSON.parse(i.callbackMessages))
    return response.json({ invoices })
}

async function insert(request, response) {
    const invoice = request.body;
    console.log(`callback recebido -- protocolo: ${invoice.protocol} -- status: ${invoice.status}`)
    await Model.create(invoice);
    return response.json({ message: 'ok' })
}