import { prop, getModelForClass } from "@typegoose/typegoose";
import { Rules } from "./rules.model";
import { CampaingEntity } from "src/domain/entities/campaing.entity";

export class Campaing implements CampaingEntity {
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
