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
}

module.exports = Template;
