import { Request, Response } from "express";
import { UserApplication } from "src/application/user.application";

export class UserController {
  private userApplication: UserApplication;

  constructor(_userApplication: UserApplication) {
    this.userApplication = _userApplication;
  }

  async create(req: Request, res: Response) {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({
        status: 400,
        reason: "NAME_NOT_FOUND",
      });
    }

    try {
      const user = await this.userApplication.createUser(name);
      return res.status(201).json({
        status: 201,
        user,
      });
    } catch (error) {
      return handlerError(error, 500, res);
    }
  }

  async findUser(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const user = await this.userApplication.findUserById(id);

      if (!user) {
        return res.status(404).json({
          status: 404,
          reason: "USER_NOT_FOUND",
        });
      }

      return res.status(200).json({
        status: 200,
        user,
      });
    } catch (error) {
      return handlerError(error, 500, res);
    }
  }
}


const handlerError = (error: any, status: number, res: Response) => {
  console.error(error);
  return res.status(status).json({
    status,
    reason: error.message || "INTERNAL_SERVER_ERROR",
    error,
  });
};
