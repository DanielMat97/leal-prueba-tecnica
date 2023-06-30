import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJson from "../../../../documentation/swagger.json";

const swaggerRoute = express.Router();

swaggerRoute.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerJson)
);

export { swaggerRoute };
