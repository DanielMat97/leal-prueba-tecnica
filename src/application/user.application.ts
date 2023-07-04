import { ReturnModelType } from "@typegoose/typegoose";
import { User } from "src/infraestructure/database/models/user.model";

export class UserApplication {
  private UserModel;

  constructor(_userModel: ReturnModelType<typeof User>) {
    this.UserModel = _userModel;
  }

  async createUser(name: string) {
    return await this.UserModel.create({ name });
  }

  async findUserById(id: string) {
    return await this.UserModel.findById(id);
  }

  async assingLealPoints(
    id_user: string,
    value: number,
    id_commerce: string,
    id_branch_office: string,
    id_campaign: string
  ) {
    return await this.UserModel.findByIdAndUpdate(
      id_user,
      {
        $push: {
          leal_points_history: {
            id_commerce,
            id_branch_office,
            id_campaign,
            sign: true,
            value,
          },
        },
      },
      { new: true }
    );
  }

  async assingCashback(
    id_user: string,
    value: number,
    id_commerce: string,
    id_branch_office: string,
    id_campaign: string
  ) {
    const user = await this.UserModel.findById(id_user);
    const total = user?.cashback.total ? user.cashback.total : 0;
    const cashback = total + value;

    return await this.UserModel.findByIdAndUpdate(
      id_user,
      {
        cashback: {
          total: cashback,
        },
        $push: {
          cashback_history: {
            id_commerce,
            id_branch_office,
            id_campaign,
            sign: true,
            value,
          },
        },
      },
      { new: true }
    );
  }
}
