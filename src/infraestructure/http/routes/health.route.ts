import express from "express";
import { HealthController } from "../controllers/health.controller";

const healthController = new HealthController();
const healthRoute = express.Router();

healthRoute.get("/health", healthController.run);

export { healthRoute };
