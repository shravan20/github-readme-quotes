const themes = require("../../themes/themes");
const template = require('../../utils/cardTemplate');
const requestApi =require('../../utils/fetchApi');
const url = process.env.SERVICE_URL;

const getQuote = async (req, res, next) => {
  
  try {
    
    let apiResponse = await requestApi(url);
    
    let data = {
        quote: apiResponse.quote,
        author: apiResponse.author
    };

    let theme = themes[req.query.theme ? req.query.theme : "default"];

    let svg = template.generateTemplate(theme, data);
    
    res.setHeader("Content-Type", "image/svg+xml");
    res.send(svg);
  
  } catch (error) {
    res.send({
      quote: "error",
    });
  }
};

module.exports = {
  getQuote
};
