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

const filterQuotesByAuthor = (quotes, author) => {
  const quotesFiltered = quotes.filter((quote) => quote?.author?.toString().toLowerCase().trim() === author.toString().toLowerCase().trim());

  return quotesFiltered.length > 0 ? quotesFiltered : quotes;
}

const getQuote = async (quoteObj) => {

  try {
    let { theme, animation, layout, quotesUrl, quoteCategory, font, quoteType, borderColor, author } = quoteObj;
    let apiResponse;
    let { customQuotesUrl, isValidUrl } = await getValidUrl(quotesUrl);
    let isCustomQuote = false;

    if (isValidUrl) {
      //url from params is valid, proceed to verfiy the data
      apiResponse = await requestApi(customQuotesUrl);

      if (author) {
        apiResponse = filterQuotesByAuthor(apiResponse, author);
      }

      if (apiResponse.length > 0) {
        apiResponse = apiResponse[Math.floor(getQuoteIndex(apiResponse.length, quoteType))];
        
        if (apiResponse.quote && apiResponse.author) {
          isCustomQuote = true;
        }
      }
    }
    else if (quoteCategory) {
      apiResponse = quoteFromCategory[quoteCategory];

      if (author) {
        apiResponse = filterQuotesByAuthor(apiResponse, author);
      }

      apiResponse = apiResponse[Math.floor(getQuoteIndex(apiResponse.length, quoteType))];
      
      isCustomQuote = true;
    }
    
    if(!isCustomQuote) {
      apiResponse = await requestApi(url);

      if (author) {
        apiResponse = filterQuotesByAuthor(apiResponse, author);
      }

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

const getAuthors = async (quoteObj) => {
  try {
    let {quotesUrl, quoteCategory} = quoteObj;
    let apiResponse;
    let { customQuotesUrl, isValidUrl } = await getValidUrl(quotesUrl);
    let isCustomQuote = false;

    if (isValidUrl) {
      //url from params is valid, proceed to verfiy the data
      apiResponse = await requestApi(customQuotesUrl);

      if (apiResponse.length > 0) {
        if (apiResponse[0].author) {
          isCustomQuote = true;
        }
      }
    }
    else if (quoteCategory) {
      apiResponse = quoteFromCategory[quoteCategory];
      isCustomQuote = true;
    }
    
    if(!isCustomQuote) {
      apiResponse = await requestApi(url);
    }

    if (!apiResponse || apiResponse.length === 0) {
      return [];
    } 

    // Get array of authors in alphabetical order and without duplicates
    const authors = [...new Set(apiResponse.map(quote => quote.author).sort())];

    return authors;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getQuote,
  getAuthors
};
