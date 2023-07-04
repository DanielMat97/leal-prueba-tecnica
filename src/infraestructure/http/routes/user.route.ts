import express from "express";
import {
  authMiddleware,
  userController,
} from "../../dependencies/user.dependency";

const userRoute = express.Router();

userRoute
  .post("/user", userController.create.bind(userController))
  .post(
    "/user/purchase",
    authMiddleware.auth.bind(authMiddleware),
    userController.purchase.bind(userController)
  )
  .get("/user/:id", userController.findUser.bind(userController));

export { userRoute };
