import { ReturnModelType } from "@typegoose/typegoose";
import { Commerce } from "src/infraestructure/database/models/commerce.model";
import { Rules } from "src/infraestructure/database/models/rules.model";

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
    return await this.CommerceModel.findOne({ "branchOffice._id": _id }).select(
      "branchOffice"
    );
  }

  async assingCampaing(
    _id: string,
    type: string,
    start_date: Date,
    end_date: Date,
    detail: Object
  ) {
    const campaing = {
      id_branch_office: _id,
      rules: {
        type,
        start_date,
        end_date,
        detail,
      },
    };

    return await this.CommerceModel.findOneAndUpdate(
      {
        "branchOffice._id": _id,
      },
      {
        $set: {
          "branchOffice.$.campaing": campaing,
        },
      },
      {
        new: true,
      }
    );
  }
}
