import { prop, getModelForClass } from "@typegoose/typegoose";
import { BranchOffice } from "./branch_office.model";

export class Commerce {
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
