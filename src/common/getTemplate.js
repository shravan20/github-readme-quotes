const getTemplate = (template) => {
  return `
    <svg width="700px" height="${parseInt(
      template.height
    )}px" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <style>
      @font-face{
        font-family: "customFont";
        src: ${template.font.src}
      }
      </style>
    </defs>
    <foreignObject width="100%" height="100%">
        <div xmlns="http://www.w3.org/1999/xhtml">
            <style>
                ${template.css}
            </style>
            ${template.structure}
        </div>
    </foreignObject>
    </svg>`;
};

module.exports = getTemplate;
