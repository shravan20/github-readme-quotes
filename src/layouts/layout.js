const layouts = {
  default: {
    style: (template) => {
      return `  * {
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
                color: #${template.theme.quote_color};
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
                color: #${template.theme.author_color};
                }`;
    },
    structure: (template) => {
      return `<div class="container">
                <h3> ${template.quote} </h3>
                <p>- ${
                  template.author === "Unknown" ? "Anonymous" : template.author
                } </p>
            </div>`;
    },
  },
  socrates: {
    style: (template) => {
      return `.square-brackets-quote {
                display:inline-block;
                font-family:Arial,Helvetica,sans-serif;
                margin:1em;
                max-width:35em;
                ${template.animation.animation};
                } 
                ${template.animation.keyframes}
                .square-brackets-quote blockquote {
                    border:solid 1em #${template.theme.bg_color};
                    display:inline-block;
                    margin:0;
                    padding:1em;
                    position:relative;
                    
                }
                 .square-brackets-quote blockquote::before {
                    background-color: #fff;
                    bottom: -1em;
                    content: "";
                    left: 2em;
                    position: absolute;
                    right: 2em;
                    top: -1em;
                    }
                .square-brackets-quote cite {
                    color:#757575;
                    display: block;
                    font-size:small;
                    font-style: normal;
                    text-align: right;
                    text-transform:uppercase;
                    }
                 * {
                    position: relative;
                    z-index: 1;
                    }
                
            
            `;
    },
    structure: (template) => {
      return `<div class="square-brackets-quote">
                        <blockquote>
                            <p>${template.quote}</p>
                            <cite>${
                              template.author === "Unknown"
                                ? "Anonymous"
                                : template.author
                            }</cite>
                        </blockquote>
                    </div>`;
    },
  },
};

module.exports = layouts;
