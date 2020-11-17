const controllers = require('../controllers/quotesController'); 

const defineRoutes = (app) => {
  
    // get a quote
    app.get('/quote', controllers.getQuote);

}

module.exports = defineRoutes;