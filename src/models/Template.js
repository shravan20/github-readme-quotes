const layouts = require("../layouts/layout");

class Template {
  constructor() {
    (this.theme = "default"), (this.animation = "default");
    this.layout = "default";
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
    if (layout) this.layout = layout;
    this.setStyle(layouts[this.layout].style);
    this.setStructure(layouts[this.layout].structure);
  }
  setStyle(style) {
    this.css = style(this);
  }

  setStructure(structure) {
    this.structure = structure(this);
  }
}

module.exports = Template;
