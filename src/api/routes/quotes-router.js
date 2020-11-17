const controllers = require('../controllers/quotesController'); 
const express = require('express');

const defineRoutes = (expressApp) => {
    const router = express.Router();
  
    // get a quote
    router.get('/', controllers.getQuote);

}