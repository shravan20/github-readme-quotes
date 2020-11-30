const getValidUrl = async (customQuotesUrl) => {

    let isValidUrl;

    try{
        new URL(customQuotesUrl);
        isValidUrl = true;
    }catch(_){
        isValidUrl = false;
    }

    if (isValidUrl && customQuotesUrl.includes('github.com')) {
        // if url is github file url, change it to its raw file url to access its content directly
        customQuotesUrl = customQuotesUrl.replace('//github.com/', '//raw.githubusercontent.com/').replace('/blob/', '/');
    }
    return ({
        isValidUrl,
        customQuotesUrl
    });

}

module.exports = getValidUrl;