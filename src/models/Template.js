class Template {
  constructor() {
    (this.theme = "default"), (this.animation = "default");
  }

  setTheme(theme) {
    this.theme = theme;
  }

  setData(data) {
    this.quote = data.quote;
    this.author = data.author;
  }

  setAnimation(animation) {
    this.animation = animation;
  }

  setStyle() {
    this.css = `* {
                padding: 0;
                margin: 0;
                box-sizing: border-box;
                }
                .container {
                font-family: Arial, Helvetica, sans-serif;
                padding: 40px 20px;
                width: 600px;
                background-color: #${this.theme.bg_color};
                border: 1px solid rgba(0, 0, 0, 0.2);
                border-radius: 5px;
                ${this.animation.animation};
                }
                ${this.animation.keyframes}
                .container h3 {
                font-size: 19px;
                margin-bottom: 5px;
                font-weight: 500;
                font-style: oblique;
                color: #${this.theme.title_color};
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
                color: #${this.theme.text_color};
                }`;
  }
}

module.exports = Template;
