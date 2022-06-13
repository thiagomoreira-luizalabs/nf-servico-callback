module.exports = {
    ping,
}

async function ping(request, response) {
    return response.json({ date: new Date().toISOString(), message: "Server Online" })
}