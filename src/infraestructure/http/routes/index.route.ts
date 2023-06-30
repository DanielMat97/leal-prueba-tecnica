import express from "express";
import { healthRoute } from "./health.route";

const indexRoutes = express.Router();

indexRoutes.use(healthRoute);

export { indexRoutes };
