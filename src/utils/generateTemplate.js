const getTemplate=require('../common/getTemplate');

const generateTemplate = (template) => {
  return getTemplate(template);
};

module.exports = {
  generateTemplate,
};
