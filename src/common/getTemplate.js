const getTemplate=template=>{
    return `
    <svg width="700px" height="250px" fill="none" xmlns="http://www.w3.org/2000/svg">
    <foreignObject width="100%" height="100%">
        <div xmlns="http://www.w3.org/1999/xhtml">
            <style>
                * {
                padding: 0;
                margin: 0;
                box-sizing: border-box;
                }
                .container {
                font-family: Arial, Helvetica, sans-serif;
                padding: 40px 20px;
                width: 600px;
                background-color: #${template.theme.bg_color};
                border: 1px solid rgba(0, 0, 0, 0.2);
                border-radius: 5px;
                ${template.animation.animation};
                }
                ${template.animation.keyframes}
                .container h3 {
                font-size: 19px;
                margin-bottom: 5px;
                font-weight: 500;
                font-style: oblique;
                color: #${template.theme.title_color};
                }
                .container h3::before {
                content: open-quote;
                font-size: 25px;
                }
                .container h3::after {
                content: close-quote;
                vertical-align: sub;
                font-size: 25px;
                }
                .container p {
                /* float: right; */
                /* margin-right: 20px; */
                font-style: italic;
                padding: 5px;
                text-align: right;
                color: #${template.theme.text_color};
                }
            </style>
            <div class="container">
                <h3> ${template.quote} </h3>
                <p>- ${
                  template.author === "Unknown" ? "Anonymous" : template.author
                } </p>
            </div>
        </div>
    </foreignObject>
    </svg>`;
}

module.exports=getTemplate;