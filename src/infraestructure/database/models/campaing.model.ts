import { prop, getModelForClass } from "@typegoose/typegoose";
import { Rules } from "./rules.model";

export class Campaing {
  @prop({ required: true })
  id_branch_office: string;

  @prop({ required: true, type: () => Rules })
  rules: Rules;
}

const schemaOptions = {
  schemaOptions: {
    timestamps: {
      updatedAt: true,
      createdAt: true,
    },
  },
};

const CampaingModel = getModelForClass(Campaing, schemaOptions);
export { CampaingModel };
