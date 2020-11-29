const requestApi =require('../../utils/fetchApi');
const url = process.env.SERVICE_URL;
const cardTemplate = require('../../utils/generateTemplate');
const Template=require("../../models/Template");





const getQuote= async (reqObj,res) =>{

    try{

        let {theme,animation,layout}=reqObj;

        let apiResponse = await requestApi(url);

        const template=new Template();
        template.setTheme(theme);
        template.setData(apiResponse);
        template.setAnimation(animation);
        template.setLayout(layout);

        let svg = cardTemplate.generateTemplate(template);
        
        res.setHeader("Content-Type", "image/svg+xml");
        res.header(
        "Cache-Control",
        "no-cache,max-age=0,no-store,s-maxage=0,proxy-revalidate"
        );
        res.header("Pragma", "no-cache");
        res.header("Expires", "-1");
        res.send(svg);
        }
    catch (error){
        res.send({
            name: error.name,
             message: error.message,
        });
    }
    
}

module.exports={
    getQuote
}