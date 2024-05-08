const express = require('express');
const port = process.env.PORT || 3002;
const routes = require('./api/routes/quotes-router');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require("path");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const initiateServer = async () => {

  const app = express();


  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }))

  app.use(morgan('dev'));
  app.use(express.static(path.join(__dirname, "../", "frontend", "/", "build")));
  routes(app);

  // Serve SwaggerUi docs
  await swaggerDocs(app);
  app.use(express.static(__dirname));

  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "../", "frontend", "/", "build", "index.html"));
  });

  app.listen(port, () => console.log(`App listening at http://localhost:${port}`));

}

async function swaggerDocs(app) {
  const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "GitHub Readme Quotes",
        version: "1.9.0",
        description: "Dynamic quote generator for your GitHub readmes | Give a poetic touch to readmes",
        license: {
          name: "MIT"
        }
      },
      servers: [
        {
          url: "https://github-readme-quotes-bay.vercel.app/",
          description: "Production server"
        },
        {
          url: `http://localhost:${port}/`,
          description: "Local development server"
        }
      ],
    },
    apis: ["./src/api/routes/quotes-router.js"],
  };

  const specs = await swaggerJsdoc(options);

  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs)
  );
}


module.exports = {
  initiateServer
};
