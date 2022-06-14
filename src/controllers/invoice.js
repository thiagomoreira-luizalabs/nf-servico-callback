const Model = require('../models/invoice')

module.exports = {
    getAll,
    getByProtocol,
    insert
}

async function getAll(request, response) {
    const invoices = await Model.findAll();
    return response.json({ invoices })
}

async function getByProtocol(request, response) {
    const invoice = await Model.findOne({ where: { protocol: request.params.protocol } });
    return response.json({ invoice })
}


async function insert(request, response) {
    const invoice = request.body;
    console.log(`callback recebido -- protocolo: ${invoice.protocol} -- status: ${invoice.status}`)
    await Model.create(invoice);
    return response.json({ message: 'ok' })
}