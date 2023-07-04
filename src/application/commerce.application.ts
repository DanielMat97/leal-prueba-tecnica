import { ReturnModelType } from "@typegoose/typegoose";
import { Commerce } from "src/infraestructure/database/models/commerce.model";

export class CommerceApplication {
  private CommerceModel;

  constructor(_commerceModel: ReturnModelType<typeof Commerce>) {
    this.CommerceModel = _commerceModel;
  }

  async createCommerce(name: string) {
    return await this.CommerceModel.create({ name });
  }

  async findCommerceById(id: string) {
    return await this.CommerceModel.findById(id);
  }

  async getAll() {
    return await this.CommerceModel.find().populate("branchOffice");
  }

  async createBranch(id_commerce: string, name: string) {
    return await this.CommerceModel.findByIdAndUpdate(
      id_commerce,
      {
        $push: {
          branchOffice: {
            id_commerce,
            name,
          },
        },
      },
      { new: true }
    );
  }

  async findBranchOfficeById(_id: string) {
    console.log(_id);
    return await this.CommerceModel.findOne({ "branchOffice._id": _id }).select(
      "branchOffice"
    );
  }
}
