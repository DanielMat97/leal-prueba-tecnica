import { Request, Response } from "express";

export class HealthController {
  run(_: Request, res: Response) {
    res.status(200).json({
      status: 200,
      uptime: new Date().getTime(),
    });
  }
}
