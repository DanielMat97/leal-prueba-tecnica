import { UserDatabase } from "../database/user.database";
import { UserApplication } from "../../application/user.application";
import { PointsApplication } from "../../application/points.application";
import { AuthMiddleware } from "../http/middlewares/auth.middleware";
import { UserController } from "../http/controllers/user.controller";
import { commerceApplication } from "./commerce.dependency";

const userRepository = new UserDatabase();
const userApplication = new UserApplication(userRepository);
const pointsApplication = new PointsApplication();
const authMiddleware = new AuthMiddleware(userApplication);
const userController = new UserController(userApplication, commerceApplication, pointsApplication);

export { authMiddleware, userController };
