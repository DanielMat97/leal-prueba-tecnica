import express from "express";
import { userController } from "../../dependencies/user.dependency";

const userRoute = express.Router();

userRoute
  .post("/user", userController.create.bind(userController))
  .get("/user/:id", userController.findUser.bind(userController));

export { userRoute };
