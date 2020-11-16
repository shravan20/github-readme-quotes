const fetch = require('node-fetch');

const fetchCall = async ( url, options ) => {
    
    try {
        let response = await fetch(url, options);
        return await response.json();               
    } catch (e) {
        console.log(e);
        throw e;    
    }
}