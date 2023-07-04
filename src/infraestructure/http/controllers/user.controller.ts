import mongoose from "mongoose";
import { Request, Response } from "express";
import { CommerceApplication } from "src/application/commerce.application";
import { UserApplication } from "src/application/user.application";
import { BranchOffice } from "src/infraestructure/database/models/branch_office.model";
import { Campaing } from "src/infraestructure/database/models/campaing.model";
import { PointsApplication } from "src/application/points.application";
import moment from "moment";

export class UserController {
  private userApplication: UserApplication;
  private commerceApplication: CommerceApplication;
  private pointsApplication: PointsApplication;

  constructor(
    _userApplication: UserApplication,
    _commerceApplication: CommerceApplication,
    _pointsApplication: PointsApplication
  ) {
    this.userApplication = _userApplication;
    this.commerceApplication = _commerceApplication;
    this.pointsApplication = _pointsApplication;
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

  async purchase(req: Request, res: Response) {
    const { id_branch_office, value } = req.body;

    if (!id_branch_office) {
      return res.status(400).json({
        status: 400,
        reason: "ID_BRANCH_OFFICE_NOT_FOUND",
      });
    }

    if (!value) {
      return res.status(400).json({
        status: 400,
        reason: "VALUE_NOT_FOUND",
      });
    }

    let commerce;

    try {
      commerce = await this.commerceApplication.findBranchOfficeById(
        id_branch_office
      );

      if (!commerce) {
        return res.status(400).json({
          status: 200,
          message: "BRANCH_OFFICE_NOT_FOUND",
        });
      }
    } catch (error) {
      return handlerError(error, 500, res);
    }

    let branch;

    branch = commerce.branchOffice.map(
      (office: BranchOffice): BranchOffice | null => {
        if (
          office.campaing &&
          new mongoose.Types.ObjectId(
            office.campaing.id_branch_office
          ).toString() == id_branch_office
        ) {
          return office;
        }
        return null;
      }
    );

    branch = cleanArray(branch);

    if (!branch.length) {
      return res.status(200).json({
        status: 200,
        message: "PURCHASE_REALIZED, CAMPAING_NOT_FOUND",
      });
    }

    const campaing: Campaing = branch[0].campaing;

    console.log("START DATE: ", moment() >= moment(campaing.rules.start_date));
    console.log("END DATE: ", moment() <= moment(campaing.rules.start_date));
    console.log(
      moment() >= moment(campaing.rules.start_date) &&
        moment() <= moment(campaing.rules.end_date)
    );

    if (
      !(
        moment() >= moment(campaing.rules.start_date) &&
        moment() <= moment(campaing.rules.end_date)
      )
    ) {
      return res.status(200).json({
        status: 200,
        reason: "PUCHASE_REALIZED, DATE_INVALID_CAMPAING",
      });
    }

    const points: number = this.pointsApplication.calculatePoints(
      value,
      campaing.rules.detail.type,
      campaing.rules.detail.value
    );

    let user;

    try {
      switch (campaing.rules.type) {
        case "LEAL_POINTS":
          user = await this.userApplication.assingLealPoints(
            req.headers.authorization || "",
            points,
            commerce.id,
            campaing.id_branch_office,
            campaing.rules.id_campaing
          );
          return res.status(200).json({
            status: 200,
            user,
          });
        case "CASHBACK":
          user = await this.userApplication.assingCashback(
            req.headers.authorization || "",
            points,
            commerce.id,
            campaing.id_branch_office,
            campaing.rules.id_campaing
          );
          return res.status(200).json({
            status: 200,
            user,
          });
        default:
          return res.status(200).json({
            status: 200,
            reason: "PUCHASE_REALIZED, TYPE_INVALID",
          });
      }
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

function cleanArray(actual: any) {
  var newArray = new Array();
  for (var i = 0, j = actual.length; i < j; i++) {
    if (actual[i]) {
      newArray.push(actual[i]);
    }
  }
  return newArray;
}
