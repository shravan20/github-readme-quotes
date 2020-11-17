const controllers = require('../controllers/index'); 
const defineRoutes = (expressApp) => {
    const router = express.Router();
  
    // get a quote
    router.get('/', controllers.getQuote);

}