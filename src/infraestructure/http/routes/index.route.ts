import express from "express";

import { swaggerRoute } from "./swagger.route";
import { healthRoute } from "./health.route";
import { userRoute } from "./user.route";
import { commerceRoute } from "./commerce.route";

const indexRoutes = express.Router();

indexRoutes.use(swaggerRoute);
indexRoutes.use(healthRoute);
indexRoutes.use(userRoute);
indexRoutes.use(commerceRoute);

export { indexRoutes };
