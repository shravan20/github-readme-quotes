const getTemplate = require("../common/getTemplate");

const generateTemplate = async (template) => {
  try {
    return await getTemplate(template);
  } catch (error) {
    console.error("Error generating template:", error);
    throw error; 
  }
};

module.exports = {
  generateTemplate,
};
