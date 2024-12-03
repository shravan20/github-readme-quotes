const layouts = {
    default: {
        style: (template) => {
            return `  * {
                  padding: 0;
                  margin: 0;
                  box-sizing: border-box;
                  }
                  .container {
                  font-family:customFont, Arial, Helvetica, sans-serif;
                  padding: 40px 20px;
                  min-width: 600px;
                  background-color: ${template.theme.bg_color};
                  border: 1px solid ${template.borderColor};
                  border-radius: 5px;
                  ${template.animation.animation};
                  }
                  ${template.animation.keyframes}
                  .container h3 {
                  font-size: 19px;
                  margin-bottom: 5px;
                  font-weight: 500;
                  font-style: oblique;
                  color: ${template.theme.quote_color};
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
                  color: ${template.theme.author_color};
                  }`;
        },
        structure: (template) => {
            return `<div class="container">
                  <h3 > ${template.quote} </h3>
                  <p >- ${template.author === "Unknown" ? "Anonymous" : template.author
                } </p>
              </div>`;
        },
    },
    socrates: {
        style: (template) => {
            return `.square-brackets-quote {
                  display:inline-block;
                  font-family:customFont,Arial,Helvetica,sans-serif;
                  margin:1em;
                  min-width:600px;
                  ${template.animation.animation};
                  } 
                  ${template.animation.keyframes}
                  .square-brackets-quote blockquote {
                      border:solid 1em ${template.theme.bg_color === "fffefe"
                    ? "ccc"
                    : template.theme.bg_color
                };
                      background: #fff;
                      display:inline-block;
                      margin:0;
                      padding:1em;
                      position:relative;
                      font-size:15px;
                      
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
                      color: ${template.theme.quote_color};
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
                              <p >${template.quote}</p>
                              <cite>${template.author === "Unknown"
                    ? "Anonymous"
                    : template.author
                }</cite>
                          </blockquote>
                      </div>`;
        },
    },
    churchill: {
        style: (template) => {
            return `#ct{
                    height:auto;
                    min-width:600px;
                    margin: 20px;
                    text-align:center;
                    font-family:customFont,Arial,Helvetica,sans-serif;
                    position:relative;
                    color:${template.theme.quote_color};
                    padding:15px;
                                      
                   background: radial-gradient(circle at top left, transparent 15px, ${template.theme.bg_color} 0) top left,
                   radial-gradient(circle at top right, transparent 15px, ${template.theme.bg_color} 0) top right,
                   radial-gradient(circle at bottom right, transparent 15px, ${template.theme.bg_color} 0) bottom right,
                   radial-gradient(circle at bottom left, transparent 15px, ${template.theme.bg_color} 0) bottom left;
                   ${template.animation.animation};
                    background-size: 51% 51%;
                    background-repeat: no-repeat;
                  }
                  ${template.animation.keyframes}
                  span{
                      background:${template.theme.bg_color};
                    color:${template.theme.author_color};
                    padding:0 10px;
                    font-size:20px;
                    position:relative; 
                    top:-28px;
                  }
                  .corner{
                    height:30px;
                    width:30px;
                    border-radius:50%;
                    border:1px solid #fff;
                    transform:rotate(-45deg);  
                    position:absolute;
                    background:#fff;
                  }
  
                  #left_top{
                    top:-16px;
                    left:-16px;
                    background: transparent;
                    border-color:transparent transparent #f1c40f transparent;
                  }
                  #right_top{
                    top:-16px;
                    right:-16px;
                    background: transparent;
                    border-color:transparent transparent transparent #f1c40f;
                  }
                  #left_bottom{
                    bottom:-16px;
                    left:-16px;
                    background: transparent;
                    border-color:transparent #f1c40f transparent transparent ;
                  }
                  #right_bottom{
                    bottom:-16px;
                    right:-16px;
                    background: transparent;
                    border-color:#f1c40f transparent transparent transparent;
                  }
                  #borderLeft {
                    border-left: 1px solid #f1c40f;
                    position: absolute;
                    top: 15px;
                    bottom: 15px;
                    left:-1px;
                  }
                  #borderTop {
                    border-top: 1px solid #f1c40f;
                    position: absolute;
                    right: 15px;
                    left: 15px;
                    top: -1px;
                  }
                  #borderRight {
                    border-right: 1px solid #f1c40f;
                    position: absolute;
                    top: 15px;
                    bottom: 15px;
                    right: -1px;
                  }
                  #borderBottom {
                    border-bottom: 1px solid #f1c40f;
                    position: absolute;
                    right: 15px;
                    left: 15px;
                    bottom: -1px;
                  }
                  p{
                    padding-top:0px;
                    font-size:17px
                  }`;
        },
        structure: (template) => {
            return `<div id="ct">
                    <div class="corner" id="left_top"></div>
                    <div class="corner" id="left_bottom"></div>
                    <div class="corner" id="right_top"></div>
                    <div class="corner" id="right_bottom"></div>
                    <div id="borderLeft"></div>
                    <div id="borderRight"></div>
                    <div id="borderBottom"></div>
                    <div id="borderTop"></div>
                    <span >${template.author === "Unknown"
                    ? "Anonymous"
                    : template.author
                }</span>
                    <blockquote>
                      <p ><i>${template.quote}</i></p>
                    </blockquote>
                  </div>`;
        },
    },
    samuel: {
        style: (template) => {
            return `.quote {
                    display: inline-block;
                    margin: 1em;
                    min-width:600px;
                    font-family:customFont,Arial,Helvetica,sans-serif;
                    ${template.animation.animation};
                  } 
                  ${template.animation.keyframes}
                  blockquote {
                      border: solid 6px ${template.theme.bg_color === "fffefe"
                    ? "757575"
                    : template.theme.bg_color
                };
                      display: inline-block;
                      margin: 0;
                      font-size:16px;
                      padding: 1em;
                      background: #fff;
                      -webkit-mask-image: radial-gradient(circle 0 at 0 0, transparent 0, transparent, black);
                      mask-image: radial-gradient(circle 0 at 0 0, transparent 0, transparent, black);
                      position: relative;
                  }
                  blockquote::before {
                        background-color: #fff;
                        bottom: -10%;
                        content: "";
                        left: 0;
                        position: absolute;
                        right: 0;
                        top: -10%;
                        transform: rotate(-15deg) skew(5deg);
                      }
                      cite {
                        display: block;
                        font-style: italic;
                        text-align: right;
                      }
                        cite::before {
                          content: "- ";
                        }
                      * {
                        position: relative;
                        z-index: 1;
                      }
                    
                  `;
        },
        structure: (template) => {
            return `<div class="quote">
                    <blockquote>
                      <p >${template.quote}</p>
                      <cite >${template.author === "Unknown"
                    ? "Anonymous"
                    : template.author
                }</cite>
                    </blockquote>
                  </div>`;
        },
    },
    zues: {
        style: (template) => {
            return `
  
          .container{
              background-color: ${template.theme.bg_color};
              width:550px;
              height:auto;
              padding:30px 20px 40px 40px;
              font-family:customFont,Arial,Helvetica,sans-serif;
              ${template.animation.animation};
          }
          ${template.animation.keyframes}
          
                .quote4{
                  background-color: ${template.theme.bg_color};
                      color:#fff;
                      width:450px;
                      text-align:justify;
                      border-left:  thick double #C08552;
                      border-right:  thick double #C08552;
                      padding:40px 10px;
                      position:relative;
                      transform: skew(-.312rad);
                      height:auto;
                    }
  
                    .quote4::before, .quote4::after{
                      position:absolute;
                      font-size:105px;
                      background: ${template.theme.bg_color};
                      display:block;
                      height:30px;
                      width:45px;
                      text-align:center;
                      color:#DAB49D;
                      left:0;
                      right:0;
                      margin:auto;
                      z-index:100;
                    }
  
                    .quote4::before{
                      content:"“";
                      top:-10px;
                      line-height:80px;
                      z-index:1;
                    }
  
                    .quote4::after{
                      content:"”";
                      bottom:-25px;
                      line-height: 70px;
                    }
  
                    .quote4 .first, .quote4 .txt{
                      width:90%;
                      margin:auto;
                      transform: skew(.312rad);
                    }
                    .quote4 .first{
                      margin-top:10px;
                      width:100%;
                      color: #DAB49D;
                      font-size:14px;  
                      text-transform:uppercase;
                      letter-spacing:1px;
                    }
                    .quote4 .txt{
                      color:#F3E9DC;
                      font-size:16px; 
                    }
  
                    .quote4 .from{
                      text-align:center;
                      margin-top:15px;
                      font-size:13px;
                      color: #5E3023;
                    }
  
                    .quote4 .border::before, .quote4 .border::after{
                      content:"";
                      width:280px;
                      height:3px;
                      position:absolute;
                      display:block;
                      left:0;
                      right:0;
                      margin:auto;
                    }
  
                    .quote4 .border::after{
                      border-bottom: 2px solid #C08552;  
                      bottom: 0px;
                    }
  
                    .quote4 .border::before{
                      border-top: 2px solid #C08552; 
                      top:0px;
                    }`;
        },
        structure: (template) => {
            return `
          <div class="container">
              <div class="quote4">
                    <div class="border"></div>
                    <div class="txt" >${template.quote}</div>
                    <div class="from" >${template.author === "Unknown"
                    ? "Anonymous"
                    : template.author
                }</div>
              </div>
          </div>
          `;
        },
    },
};

export default layouts;
