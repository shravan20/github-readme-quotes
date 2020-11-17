const express = require('express');
const port = process.env.PORT || 3002;


const initiateServer = () => {
    
    const app = express();

    app.get('/', (req, res) => res.send('Hello World!'));

    app.listen(port, () => console.log(`App listening at http://localhost:${port}`));

} 

module.exports = {
    initiateServer
};
