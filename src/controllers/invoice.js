module.exports = {
    getAll,
    insert
}

async function getAll(request, response) {
    return response.json({ data: [] })
}

async function insert(request, response) {
    console.log(`callback recebido -- protocolo: ${request.body.protocol}`)
    return response.json({ message: 'ok' })
}