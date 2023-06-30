import express from "express";

import { swaggerRoute } from "./swagger.route";
import { healthRoute } from "./health.route";

const indexRoutes = express.Router();

indexRoutes.use(swaggerRoute);
indexRoutes.use(healthRoute);

export { indexRoutes };
