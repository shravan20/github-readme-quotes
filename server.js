const express = require('express');
const app = express();
const port = process.env.PORT || 3002;

app.get('/', (req, res) => res.send('Hello World!'));


app.listen(port, () => console.log(`App listening at http://localhost:${port}`));