const themes = require("../../themes/themes");
const template = require('../../utils/cardTemplate');


const getQuote = (req, res, next) => {
  try {
    let theme = themes[req.query.theme ? req.query.theme : "default"];
    let svg = template.generateTemplate(theme);
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
