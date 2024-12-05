/**
 * @swagger
 * components:
 *   schemas:
 *     theme:
 *       type: string
 *       default: light
 *       enum:
 *         - light
 *         - dark
 *         - radical
 *         - merko
 *         - gruvbox
 *         - tokyonight
 *         - onedark
 *         - cobalt
 *         - synthwave
 *         - highcontrast
 *         - dracula
 *       description: Avaiable themes.
 *     layout:
 *       type: string
 *       default: default
 *       enum:
 *         - default
 *         - socrates
 *         - churchill
 *         - samuel
 *         - zues
 *     font:
 *       type: string
 *       default: Default
 *       enum:
 *         - Default
 *         - Gabrielle
 *         - Redressed
 *     animation:
 *       type: string
 *       default: Default
 *       enum:
 *         - Default
 *         - Grow-out-in
 *     quoteCategory:
 *       type: string
 *       default: programming
 *       enum:
 *         - motivational
 *         - fun
 *         - life
 *         - general
 *         - programming
 *         - success
 *     quoteType:
 *       type: string
 *       default: random
 *       enum:
 *         - random
 *         - quote-for-the-day
 */


/**
 * @swagger
 * paths:
 *   /quote:
 *     get:
 *       tags:
 *         - Quote
 *       description: Returns an image of a quote
 *       parameters:
 *         - name: theme
 *           in: query
 *           schema:
 *             $ref: "#/components/schemas/theme"
 *           description: Changes the theme for the quote.
 *         - name: layout
 *           in: query
 *           schema:
 *             $ref: "#/components/schemas/layout"
 *           description: Changes the layout for the quote.
 *         - name: font
 *           in: query
 *           schema:
 *             $ref: "#/components/schemas/font"
 *           description: Changes the font of the quote.
 *         - name: animation
 *           in: query
 *           schema:
 *             $ref: "#/components/schemas/animation"
 *           description: Adds an animation to your quote. Default value will return a quote with no animation.
 *         - name: customQuote
 *           in: query
 *           schema:
 *             type: string
 *           description: The URL of a custom quote. The quote must be uploaded to any public repository using [this](https://github.com/shravan20/github-readme-quotes/blob/main/customQuotes/quotes.json) format.
 *         - name: quoteCategory
 *           in: query
 *           schema:
 *             $ref: "#/components/schemas/quoteCategory"
 *           description: Chooses a quote from the specified category.
 *         - name: quoteType
 *           in: query
 *           schema:
 *             $ref: "#/components/schemas/quoteType"
 *           description: Chooses a quote type from the specified category.
 *       responses:
 *         200:
 *           description: Successful response
 *           content:
 *             image/svg:
 *               schema:
 *                 type: string
 *                 format: binary              
 */



const controllers = require('../controllers/quotesController');
const authorsController = require('../controllers/authorsController');

const defineRoutes = (app) => {

    // get a quote
    app.get('/quote', controllers.quoteController);

    // get authors
    app.get('/authors', authorsController.authorsController);

}

module.exports = defineRoutes;
