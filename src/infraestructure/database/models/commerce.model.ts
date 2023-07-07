import { prop, getModelForClass } from "@typegoose/typegoose";
import { BranchOffice } from "./branch_office.model";
import { CommerceEntity } from "src/domain/entities/commerce.entity";

export class Commerce implements CommerceEntity {
  @prop({ required: true })
  name: string;

  @prop({
    required: false,
    type: () => BranchOffice,
  })
  branchOffice: BranchOffice[];
}

const schemaOptions = {
  schemaOptions: {
    timestamps: {
      createdAt: true,
    },
  },
};

const CommerceModel = getModelForClass(Commerce, schemaOptions);
export { CommerceModel };
