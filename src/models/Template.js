const layouts = require("../layouts/layout");

class Template {
  constructor() {
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

  setLayout(layout) {
     this.layout = layout;
    this.setStyle(layout.style);
    this.setStructure(layout.structure);
  }
  setStyle(style) {
    this.css = style(this);
  }

  setStructure(structure) {
    this.structure = structure(this);
  }
}

module.exports = Template;
