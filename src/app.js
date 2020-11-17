const express = require('express');
const port = process.env.PORT || 3002;
const routes = require('./api/routes/quotes-router');

const initiateServer = () => {
    
    const app = express();

    routes(app);

    app.listen(port, () => console.log(`App listening at http://localhost:${port}`));

} 

module.exports = {
    initiateServer
};
