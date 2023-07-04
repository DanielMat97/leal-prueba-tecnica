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
}
