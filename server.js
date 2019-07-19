const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());    // Note - This enables all CORS requests.
const port = 3000;

app.get('/sayHello', (req, res) => {
    console.log(`Received request: ${req.method} ${req.url}`);
    res.send('Hola Mundo!\n');
    res.end();
});

app.listen(port, () => console.log(`Example app listening on port ${port}`));
