import swaggerJSDoc from "swagger-jsdoc";
import  swaggerUi from "swagger-ui-express";

const options = {
    definition: {
        openapi: "3.0.0",
        info: { title: "CrudNodeJS", version: "1.0.0" }
    },
    apis: ["#Routes/user.routes.js", "#Schemas/user.schema.js"],
};

const swaggerSpec = swaggerJSDoc(options);

// Function to setup our docs
const swaggerDocs = (app, port) => {
    app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    app.get('/api/docs.json', (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(swaggerSpec)
    });

    console.log(`Version 1 docs are available at http://localhost:${process.env.PORT}/api/docs`)
}

export default swaggerDocs;