const requestApi = require("../../utils/fetchApi");
const url = process.env.SERVICE_URL;
const cardTemplate = require("../../utils/generateTemplate");
const Template = require("../../models/Template");
const getValidUrl = require("../../utils/validateUrl");
const quoteFromCategory = require('../../../customQuotes/category.json');

getQuoteIndex = (apiResponseLength, quoteType) => {
  // Determine the quote index
  let today = new Date();
  let epoch = new Date(today.getFullYear(), today.getMonth(), today.getDate()).getTime() / 1000
  return (quoteType === "quote-for-the-day" ? epoch % apiResponseLength : Math.random() * apiResponseLength);
}

const getQuote = async (quoteObj) => {

  try {
    let { theme, animation, layout, quotesUrl, quoteCategory, font, quoteType, borderColor } = quoteObj;
    let apiResponse;
    let { customQuotesUrl, isValidUrl } = await getValidUrl(quotesUrl);
    let isCustomQuote = false;

    if (isValidUrl) {
      //url from params is valid, proceed to verfiy the data
      apiResponse = await requestApi(customQuotesUrl);

      if (apiResponse.length > 0) {
        apiResponse = apiResponse[Math.floor(getQuoteIndex(apiResponse.length, quoteType))];
        
        if (apiResponse.quote && apiResponse.author) {
          isCustomQuote = true;
        }
      }
    }
    else if (quoteCategory) {
      apiResponse = quoteFromCategory[quoteCategory];
      apiResponse = apiResponse[Math.floor(getQuoteIndex(apiResponse.length, quoteType))];
      isCustomQuote = true;
    }
    
    if(!isCustomQuote) {
      apiResponse = await requestApi(url);
      apiResponse = apiResponse[Math.floor(getQuoteIndex(apiResponse.length, quoteType))];
    }

    const template = new Template();
    template.setTheme(theme);
    template.setData(apiResponse);
    template.setFont(font);
    template.setAnimation(animation);
    template.setBorderColor(borderColor);
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
