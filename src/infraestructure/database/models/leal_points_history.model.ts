import { prop, getModelForClass } from "@typegoose/typegoose";

export class LealPointsHistory {
  @prop({ required: true })
  id_commerce: string;

  @prop({ required: true })
  id_branch_office: string;

  @prop({ required: true })
  id_campaign: string;

  @prop({ required: true })
  sign: boolean;

  @prop({ required: true, min: 0 })
  value: number;
}

const schemaOptions = {
  schemaOptions: {
    timestamps: {
      updatedAt: true,
      createdAt: true,
    },
  },
};

const LealPointsHistoryModel = getModelForClass(
  LealPointsHistory,
  schemaOptions
);
export { LealPointsHistoryModel };
