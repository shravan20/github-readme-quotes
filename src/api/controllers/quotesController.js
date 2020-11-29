const themes = require("../../themes/themes");
const animations = require("../../animations/animation");
const layouts=require("../../layouts/layout");
const quoteService=require("../services/quotesService");

const quoteController = async (req, res, next) => {
  
  try {
     let theme = themes[req.query.theme] ? themes[req.query.theme] : themes["default"];

     let animation = animations[req.query.animation] ? animations[req.query.animation] 
                    : animations["default"];
    
     let layout=layouts[req.query.layout] ? layouts[req.query.layout] 
                    : layouts["default"];

     let reqObj={theme,animation,layout}

    await quoteService.getQuote(reqObj,res);

  } catch (error) {
    
    res.send({
      name: error.name,
      message: error.message,
    });
  
  }
};

module.exports = {
  quoteController
};
