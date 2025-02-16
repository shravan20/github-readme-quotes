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
    let { theme, animation, layout, quotesUrl, quoteCategory, font, quoteType, borderColor, bgSource, unsplashQuery } = quoteObj;
    let apiResponse;
    let { customQuotesUrl, isValidUrl } = await getValidUrl(quotesUrl);
    let isCustomQuote = false;

    if (isValidUrl) {
      //url from params is valid, proceed to verfiy the data
      apiResponse = await requestApi(customQuotesUrl);

      if (apiResponse.length > 0) {
        apiResponse = apiResponse[Math.floor(getQuoteIndex(apiResponse.length, quoteType))];
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
      apiResponse = apiResponse[Math.floor(getQuoteIndex(apiResponse.length, quoteType))];
      isCustomQuote = true;
    }
    else {
      apiResponse = await requestApi(url);
    }

    let bgImageUrl = "";
    if (bgSource === "unsplash") {
      bgImageUrl = await getUnsplashImage(unsplashQuery || 'random');
    }

    const template = new Template();
    template.setTheme(theme);
    template.setData(isCustomQuote ? apiResponse : apiResponse[Math.floor(getQuoteIndex(apiResponse.length, quoteType))]);
    template.setFont(font);
    template.setAnimation(animation);
    template.setBorderColor(borderColor);
    template.setLayout(layout);
    template.bgImage = bgImageUrl;

    let svg = cardTemplate.generateTemplate(template);
    return svg;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getQuote,
};

async function getUnsplashImage(query) {
  const accessKey = process.env.UNSPLASH_ACCESS_KEY;
  if (!accessKey) {
    console.error('Unsplash access key not configured');
    return '';
  }

  const unsplashUrl = `https://api.unsplash.com/photos/random?query=${encodeURIComponent(query)}&client_id=${accessKey}`;

  try {
    const response = await requestApi(unsplashUrl);
    if (response && response.urls && response.urls.regular) {
      return response.urls.regular;
    } else {
      return '';
    }
  } catch (err) {
    console.error('Error fetching Unsplash image:', err);
    return '';
  }
}
