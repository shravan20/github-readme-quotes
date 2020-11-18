const themes = require("../../themes/themes");
const template = require('../../utils/cardTemplate');
const requestApi =require('../../utils/fetchApi');
const url = process.env.SERVICE_URL;
const animations = require("../../animations/animation");

const getQuote = async (req, res, next) => {
  
  try {
    
    let apiResponse = await requestApi(url);
    
    let data = {
        quote: apiResponse.quote,
        author: apiResponse.author
    };

    let theme = themes[req.query.theme ? req.query.theme : "default"];

    let animation =animations[req.query.animation ? req.query.animation : "default"];

    let svg = template.generateTemplate(theme, data,animation);
    
    res.setHeader("Content-Type", "image/svg+xml");
    res.header(
      "Cache-Control",
      "no-cache,max-age=0,no-store,s-maxage=0,proxy-revalidate"
    );
    res.header("Pragma", "no-cache");
    res.header("Expires", "-1");
    res.send(svg);
  
  } catch (error) {
    
    res.send({
      name: error.name,
      message: error.message,
    });
  
  }
};

module.exports = {
  getQuote
};
