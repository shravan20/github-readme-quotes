const controllers = require('../controllers/quotesController'); 

const defineRoutes = (app) => {
  
    // get a quote
    app.get('/quote', controllers.quoteController);

}

module.exports = defineRoutes;