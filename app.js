const express = require('express');
const app = express();
const db = require('./src/config/db');
const port = process.env.PORT || 8080;
const routes = require('./src/routes');

(async () => {
    try {
        app.use(express.json())
        routes(app)
        await db.sync();
        app.listen(port, () => console.log(`Server listening on port ${port}`))
    } catch (error) {
        console.log(`Error starting app: ${error}`);
    }
})();
