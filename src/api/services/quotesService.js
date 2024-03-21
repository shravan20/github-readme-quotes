const requestApi = require("../../utils/fetchApi");
const url = process.env.SERVICE_URL;
const cardTemplate = require("../../utils/generateTemplate");
const Template = require("../../models/Template");
const getValidUrl = require("../../utils/validateUrl");
const quoteFromCategory = require('../../../customQuotes/category.json');

const getQuote = async (quoteObj) => {

  try {
    let { theme, animation, layout, quotesUrl, quoteCategory, font } = quoteObj;
    let apiResponse;
    let { customQuotesUrl, isValidUrl } = await getValidUrl(quotesUrl);
    let isCustomQuote = false;

    if (isValidUrl) {
      //url from params is valid, proceed to verfiy the data
      apiResponse = await requestApi(customQuotesUrl);

      if (apiResponse.length > 0) {
        apiResponse = apiResponse[Math.floor(Math.random() * Math.floor(apiResponse.length))];
        if (!apiResponse.quote && !apiResponse.author) {
          apiResponse = await requestApi(url);
        } else {
          isCustomQuote = true;
        }
      } else {
        apiResponse = await requestApi(url);
      }
    }
    else if (quoteCategory) {
      apiResponse = quoteFromCategory[quoteCategory];
      apiResponse = apiResponse[Math.floor(Math.random() * apiResponse.length)];
      isCustomQuote = true;
    }
    else {
      apiResponse = await requestApi(url);
    }
    console.log(apiResponse)

    const template = new Template();
    template.setTheme(theme);
    template.setData(isCustomQuote ? apiResponse : apiResponse[Math.floor(Math.random() * apiResponse.length)]);
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
