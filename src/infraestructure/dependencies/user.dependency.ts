import { UserModel } from "../database/models/user.model";
import { UserApplication } from "../../application/user.application";
import { UserController } from "../http/controllers/user.controller";

const userApplication = new UserApplication(UserModel);
const userController = new UserController(userApplication);

export { userController };
