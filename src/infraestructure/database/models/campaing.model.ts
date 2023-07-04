import { prop, getModelForClass } from "@typegoose/typegoose";

export class Campaing {
  @prop({ required: true })
  id_branch_office: string;

  @prop({ required: true, trim: true })
  rules: object;
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
