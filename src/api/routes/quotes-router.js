const controllers = require('../controllers/quotes'); 
const defineRoutes = (expressApp) => {
    const router = express.Router();
  
    // get a quote
    router.get('/', controllers.getQuote);

}