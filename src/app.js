const express = require('express');
const port = process.env.PORT || 3002;
const routes = require('./api/routes/quotes-router');
const bodyParser = require('body-parser');


const initiateServer = () => {
    
    const app = express();
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }))


    routes(app);

    app.listen(port, () => console.log(`App listening at http://localhost:${port}`));

} 

module.exports = {
    initiateServer
};
