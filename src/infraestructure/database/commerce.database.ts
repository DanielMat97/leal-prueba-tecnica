import { CommerceRepository } from "src/domain/commerce.repository";
import { CommerceModel } from "./models/commerce.model";

export class CommerceDatabase implements CommerceRepository {
  create(name: string) {
    return CommerceModel.create({ name });
  }
  findById(id: string) {
    return CommerceModel.findById(id);
  }
  find() {
    return CommerceModel.find();
  }
  createBranch(id_commerce: string, name: string) {
    return CommerceModel.findByIdAndUpdate(
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
  findBranchById(id: string) {
    return CommerceModel.findOne({ "branchOffice._id": id });
  }
  assingCampaing(id: string, campaing: object) {
    return CommerceModel.findOneAndUpdate(
      {
        "branchOffice._id": id,
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
