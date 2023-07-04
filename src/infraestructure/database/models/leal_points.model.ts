import { prop, getModelForClass } from "@typegoose/typegoose";

export class LealPoints {
  @prop({ required: true, min: 0 })
  total: number;
}

const schemaOptions = {
  schemaOptions: {
    timestamps: {
      updatedAt: true,
    },
  },
};

const LealPointsModel = getModelForClass(LealPoints, schemaOptions);
export { LealPointsModel };
