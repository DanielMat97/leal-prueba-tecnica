import { prop, getModelForClass } from "@typegoose/typegoose";
import { Campaing } from "./campaing.model";
import { BranchOfficeEntity } from "src/domain/entities/branch_office.entity";

export class BranchOffice implements BranchOfficeEntity {
  @prop({ required: true })
  id_commerce: string;

  @prop({ required: true, trim: true })
  name: string;

  @prop({ required: false, default: null, type: () => Campaing })
  campaing: Campaing;
}

const schemaOptions = {
  schemaOptions: {
    timestamps: {
      createdAt: true,
    },
  },
};

const BranchOfficeModel = getModelForClass(BranchOffice, schemaOptions);
export { BranchOfficeModel };
