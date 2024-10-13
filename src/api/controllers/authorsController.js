const quoteService = require("../services/quotesService");

const authorsController = async (req, res, next) => {

  try {

    let quotesUrl = req.query.quotesUrl || '';

    let quoteCategory = req.query.quoteCategory || '';

    let quoteObject = {
      quotesUrl,
      quoteCategory,
    }

    const authors = await quoteService.getAuthors(quoteObject);

    res.setHeader("Content-Type", "application/json");

    res.header(
      "Cache-Control",
      "no-cache,max-age=0,no-store,s-maxage=0,proxy-revalidate"
    );
    res.header("Pragma", "no-cache");
    res.header("Expires", "-1");
    res.json(authors);

  } catch (error) {
    console.error(error);
    res.send({
      name: error.name,
      message: error.message,
    });
  }
};

module.exports = {
  authorsController
};
