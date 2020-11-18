const themes = require("../../themes/themes");
const cardTemplate = require('../../utils/generateTemplate');
const requestApi =require('../../utils/fetchApi');
const url = process.env.SERVICE_URL;
const animations = require("../../animations/animation");
const Template=require("../../models/Template");

const getQuote = async (req, res, next) => {
  
  try {
    
    let apiResponse = await requestApi(url);

    let theme = themes[req.query.theme ? req.query.theme : "default"];

    let animation =animations[req.query.animation ? req.query.animation : "default"];

    const template=new Template();
    template.setTheme(theme);
    template.setData(apiResponse);
    template.setAnimation(animation);

    let svg = cardTemplate.generateTemplate(template);
    
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
