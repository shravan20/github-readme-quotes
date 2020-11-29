const requestApi =require('../../utils/fetchApi');
const url = process.env.SERVICE_URL;
const cardTemplate = require('../../utils/generateTemplate');
const Template=require("../../models/Template");



const getQuote= async (quoteObj) =>{

    try{

        let {theme,animation,layout}=quoteObj;

        let apiResponse = await requestApi(url);

        const template=new Template();
        template.setTheme(theme);
        template.setData(apiResponse);
        template.setAnimation(animation);
        template.setLayout(layout);

        let svg = cardTemplate.generateTemplate(template);
        return svg;
        
        }
    catch (error){
        throw error;
    }
    
}

module.exports={
    getQuote
}