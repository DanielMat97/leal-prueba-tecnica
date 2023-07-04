import { Request, Response } from "express";
import { CommerceApplication } from "src/application/commerce.application";

export class CommerceController {
  private commerceApplication: CommerceApplication;

  constructor(_commerceApplication: CommerceApplication) {
    this.commerceApplication = _commerceApplication;
  }

  async createCommerce(req: Request, res: Response) {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({
        status: 400,
        reason: "NAME_NOT_FOUND",
      });
    }

    try {
      const commerce = await this.commerceApplication.createCommerce(name);
      return res.status(201).json({
        status: 201,
        commerce,
      });
    } catch (error) {
      return handlerError(error, 500, res);
    }
  }

  async findCommerce(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const commerce = await this.commerceApplication.findCommerceById(id);

      if (!commerce) {
        return res.status(404).json({
          status: 404,
          reason: "COMMERCE_NOT_FOUND",
        });
      }

      return res.status(200).json({
        status: 200,
        commerce,
      });
    } catch (error) {
      return handlerError(error, 500, res);
    }
  }

  async getAllCommerces(_: Request, res: Response) {
    try {
      const commerces = await this.commerceApplication.getAll();
      return res.status(200).json({
        status: 200,
        commerces,
      });
    } catch (error) {
      return handlerError(error, 500, res);
    }
  }

  async createBranch(req: Request, res: Response) {
    const { id_commerce, name } = req.body;

    console.log(!id_commerce);
    console.log(!name);

    if (!id_commerce) {
      return res.status(400).json({
        status: 400,
        reason: "ID_COMMERCE_NOT_FOUND",
      });
    }

    if (!name) {
      return res.status(400).json({
        status: 400,
        reason: "NAME_NOT_FOUND",
      });
    }

    try {
      const commerce = await this.commerceApplication.createBranch(
        id_commerce,
        name
      );

      return res.status(201).json({
        status: 201,
        commerce,
      });
    } catch (error) {
      return handlerError(error, 500, res);
    }
  }

  async findBranchOffice(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const offices = await this.commerceApplication.findBranchOfficeById(
        id
      );

      if (!offices) {
        return res.status(404).json({
          status: 404,
          reason: "BRANCH_OFFICE_NOT_FOUND",
        });
      }

      const branchOffice = offices.branchOffice.map(office => office)[0];

      return res.status(200).json({
        status: 200,
        branchOffice,
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
