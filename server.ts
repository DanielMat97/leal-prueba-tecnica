import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";

import { ENVIRONMENTS } from "./config/index.config";

const stage = "dev";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan(stage));
app.use(helmet());

import { indexRoutes } from "./src/infraestructure/http/routes/index.route";

app.listen(ENVIRONMENTS.SERVER.PORT, () => {
  console.log(`Server name: ${ENVIRONMENTS.SERVER.NAME}`);
  console.log(`Server runnin on port: ${ENVIRONMENTS.SERVER.PORT}`);
  console.log(`Server version: ${ENVIRONMENTS.SERVER.API_VERSION}`);
  console.log('Loading configuration...');
  
  app.use(
    `/${ENVIRONMENTS.SERVER.NAME}/${ENVIRONMENTS.SERVER.API_VERSION}`,
    indexRoutes
  );
  
  console.log('Server Ready 🔥');
});
