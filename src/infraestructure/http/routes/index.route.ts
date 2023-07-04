import express from "express";

import { swaggerRoute } from "./swagger.route";
import { healthRoute } from "./health.route";
import { userRoute } from "./user.route";

const indexRoutes = express.Router();

indexRoutes.use(swaggerRoute);
indexRoutes.use(healthRoute);
indexRoutes.use(userRoute);

export { indexRoutes };
