import { Request, Response, NextFunction } from "express";
import { UserApplication } from "src/application/user.application";

export class AuthMiddleware {
  private userApplication: UserApplication;

  constructor(_userApplication: UserApplication) {
    this.userApplication = _userApplication;
  }

  async auth(req: Request, res: Response, Next: NextFunction) {
    const authorization = req.headers.authorization;

    if (!authorization) {
      return authorizationNotFound(res);
    }

    try {
      const user = await this.userApplication.findUserById(authorization);

      if (!user) {
        return authorizationNotFound(res);
      }

      return Next();
    } catch (error) {
      return handlerError(error, 500, res);
    }
  }
}

const authorizationNotFound = (res: Response) => {
  return res.status(401).json({
    status: 401,
    reason: "AUTHORIZATION_NOT_FOUND",
  });
};

const handlerError = (error: any, status: number, res: Response) => {
  console.error(error);
  return res.status(status).json({
    status,
    reason: error.message || "INTERNAL_SERVER_ERROR",
    error,
  });
};
