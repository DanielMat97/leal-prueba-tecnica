import { UserRepository } from "src/domain/user.repository";
import { UserModel } from "./models/user.model";

export class UserDatabase implements UserRepository {
  createUser(name: string) {
    return UserModel.create({ name });
  }
  findById(id: string) {
    return UserModel.findById(id);
  }
  updateLealPoints(
    id_user: string,
    value: number,
    id_commerce: string,
    id_branch_office: string,
    id_campaign: string
  ) {
    return UserModel.findByIdAndUpdate(
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
  updateCashback(
    id_user: string,
    value: number,
    id_commerce: string,
    id_branch_office: string,
    id_campaign: string,
    cashback: number
  ) {
    return UserModel.findByIdAndUpdate(
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
