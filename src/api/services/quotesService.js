const requestApi = require("../../utils/fetchApi");
const url = process.env.SERVICE_URL;
const cardTemplate = require("../../utils/generateTemplate");
const Template = require("../../models/Template");
const getValidUrl = require("../../utils/validateUrl");
const quoteFromCategory = require('../../../customQuotes/category.json');
const { translate } = require('free-translate');

const getQuote = async (quoteObj) => {
  try {
    let { theme, animation, layout, quotesUrl, quoteCategory, font , language = 'en' } = quoteObj;
    //User input for their language preference shall be taken and passed as language codes(ISO 639-1 Code) url :- https://www.loc.gov/standards/iso639-2/php/code_list.php ,
     //by default it is kept english with language code = 'en'
    let apiResponse;
    let { customQuotesUrl, isValidUrl } = await getValidUrl(quotesUrl);
    if (isValidUrl) {
      //url from params is valid, proceed to verfiy the data
      apiResponse = await requestApi(customQuotesUrl);

      if (apiResponse.length > 0) {
        apiResponse = apiResponse[Math.floor(Math.random() * Math.floor(apiResponse.length))];
        if (!apiResponse.quote && !apiResponse.author) {
          apiResponse = await requestApi(url);
        }
      } else {
        apiResponse = await requestApi(url);
      }
    }
    else if(quoteCategory){
      apiResponse = quoteFromCategory[quoteCategory];
      apiResponse = apiResponse[Math.floor(Math.random() * apiResponse.length)];
      apiResponse.quote = await translate(apiResponse.quote, { from: 'en', to: language });
    } 
    else {
      apiResponse = await requestApi(url);
    }

    const template = new Template();
    template.setTheme(theme);
    template.setData(apiResponse);
    template.setFont(font);
    template.setAnimation(animation);
    template.setLayout(layout);

    let svg = cardTemplate.generateTemplate(template);
    return svg;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getQuote,
};
